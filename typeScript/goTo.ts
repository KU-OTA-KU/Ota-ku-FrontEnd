export function openAnimeNotLoading(animeId: string): void {
  this.$router.push(`/openAnimeView?animeId=${animeId}`);
}

export function openAnime(animeId: number) {
  this.loading = true;
  setTimeout(() => (this.loading = false), 4000);
  this.$router.push(`/openAnimeView?animeId=${animeId}`);
}

export function goTo(url: string): void {
  this.$router.push(`${url}`);
}

export function openBottomNavigationRoute(href: string) {
  this.loading.schedule = false;
  this.loading.catalog = false;
  this.loading.releases = false;

  this.loading[href] = true;

  setTimeout(() => (this.loading[href] = false), 0);
  this.$router.push(`/${href}`);
}

