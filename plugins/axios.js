export default function ({ $axios, redirect, $auth}) {
  $axios.onRequest(config => {
    if ($auth && $auth.user) config.user = $auth.user
  })
}