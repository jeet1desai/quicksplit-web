import Cookies from 'js-cookie';

class CookieStorage {
  private keys: Set<string>;

  constructor() {
    this.keys = new Set<string>();
    const allCookies = document.cookie.split(';');
    allCookies.forEach((cookie) => {
      const key = cookie.split('=')[0].trim();
      if (key) {
        this.keys.add(key);
      }
    });
  }

  getItem(key: string) {
    return Cookies.get(key);
  }

  setItem(key: string, value: string, attributes?: Cookies.CookieAttributes) {
    this.keys.add(key);
    Cookies.set(key, value, attributes);
  }

  removeItem(key: string) {
    this.keys.delete(key);
    Cookies.remove(key);
  }

  clear() {
    this.keys.forEach((key: string) => this.removeItem(key));
  }
}

export const cookieStorage = new CookieStorage();
