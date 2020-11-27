export const refreshTokenSetup = (res) => {
  let refreshTiming = (res.tokenObj.expiresIn || 3600 - 5 * 60) * 1000;

  const refreshToken = async () => {
    const newAuthRes = await res.reloadAuthResponse()
    refreshTiming = (newAuthRes.expiresIn || 3600 - 5 * 60) * 1000;
    // saveUserToken(newAuthRes.access_token)
    console.log('new auth Token', newAuthRes.id_token);

    setTimeout(refreshToken, refreshTiming)
  }

  setTimeout(refreshToken, refreshTiming)
}