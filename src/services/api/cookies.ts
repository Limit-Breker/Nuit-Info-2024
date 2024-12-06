export function getCookieValue(name: string) {
    return document.cookie
      .split('; ')
      .find(row => row.startsWith(name + '='))
      ?.split('=')[1];
  }

export function deleteCookieValue(name: string) {
    document.cookie = name + '=;';
  }

export function createCookie(name:string,value:string){
    document.cookie = name + "=" + value + "; SameSite=None; Secure" ;
}

export function isLoginError(error: any) {
  if (error.response.status === 401) {
    deleteCookieValue('token');
    window.location.href = "/";
  }
}