export default function (context) {
  // Vérifier si nous sommes dans le navigateur (côté client)
  if (process.client) {
    const { route, redirect } = context;
    
    // Vérifier si la route commence par /admin et n'est pas la page de login
    if (route.path.startsWith('/admin') && route.path !== '/admin/login') {
      // Vérifier si l'utilisateur est connecté
      const isAuthenticated = localStorage.getItem('admin_token') || sessionStorage.getItem('admin_token');
      
      // Si l'utilisateur n'est pas connecté, rediriger vers la page de login
      if (!isAuthenticated) {
        return redirect('/admin/login');
      }
    }
  }
}
