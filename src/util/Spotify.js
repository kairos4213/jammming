const clientId = '597ec828856d47c7bd4e2a8b1b128ca8';
const redirectUri = 'http://localhost:3000';

function generateRandomString(length) {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

async function generateCodeChallenge(codeVerifier) {
    function base64encode(string) {
        return btoa(String.fromCharCode.apply(null, new Uint8Array(string)))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
    }

    const encoder = new TextEncoder();
    const data = encoder.encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);

    return base64encode(digest);
}

async function getAccessToken(code) {
    let codeVerifier = localStorage.getItem('code_verifier');

    let body = new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: redirectUri,
        client_id: clientId,
        code_verifier: codeVerifier
    });

    const response = fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: body
        })
        .then(response => {
            if (!response.ok) {
            throw new Error('HTTP status ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            localStorage.setItem('access_token', data.access_token);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    return response;
}

export const Spotify = {
    requestAccessToken() {
        let codeVerifier = generateRandomString(128);

        generateCodeChallenge(codeVerifier)
            .then(codeChallenge => {
                let state = generateRandomString(16);
                let scope = 'user-read-private user-read-email playlist-modify-public playlist-modify-private'; //Add more scope parameters to edit playlists, etc.

                localStorage.setItem('code_verifier', codeVerifier);

                let args = new URLSearchParams({
                    response_type: 'code',
                    client_id: clientId,
                    scope: scope,
                    redirect_uri: redirectUri,
                    state: state,
                    code_challenge_method: 'S256',
                    code_challenge: codeChallenge
                });

                window.location = 'https://accounts.spotify.com/authorize?' + args;
            });

        const urlParams = new URLSearchParams(window.location.search);
        let code = urlParams.get('code');

        getAccessToken(code);
    },

    async search(term) {
        let accessToken = localStorage.getItem('access_token');
        
        const response = await fetch(`https://api.spotify.com/v1/search?q=${term}&type=track`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        const data = await response.json();
        const dataArray = data.tracks.items.map(track => ({
            id: track.id,
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            image: track.album.images[0].url,
            uri: track.uri
        }));
        
        return dataArray;
    },

    async getProfile() {
        let accessToken = localStorage.getItem('access_token');

        const response = await fetch('https://api.spotify.com/v1/me', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        const data = await response.json();
        const {id, display_name, email} = data;
        const profile = {
            userId: id,
            email: email,
            displayName: display_name,
        };

        return profile;
    },

    async createPlaylist(playlistName, trackUris) {
        if (!playlistName || !trackUris.length) {
            return;
        }

        const accessToken = localStorage.getItem('access_token');
        const headers = {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        }
        let userId;

        Spotify.getProfile()
            .then(async profile => {
                userId = profile.userId;
                try {
                    const response = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
                        method: 'POST',
                        headers: headers,
                        body: JSON.stringify({
                            name: playlistName,
                            public: false
                        })
                    });
                    if (!response.ok) {
                        throw new Error('HTTP status ' + response.status);
                    }
                    const jsonResponse = await response.json();
                    const playlistId = jsonResponse.id;
                    return await fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
                        method: 'POST',
                        headers: headers,
                        body: JSON.stringify({ uris: trackUris })
                    });
                } catch (error) {
                    console.error('Error:', error);
                }
            });
    }
}