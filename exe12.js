/* Uma plataforma de música deseja implementar um sistema de gerenciamento de playlists. Cada playlist é um array de objetos onde cada objeto representa uma música com titulo, artista, duracao e genero. Desenvolva funções para:

Adicionar uma nova música à playlist.
Remover uma música específica da playlist usando splice.
Criar uma nova playlist com músicas de um gênero específico usando filter.
Calcular a duração total da playlist usando reduce.
Ordenar as músicas por duração, do menor para o maior. */

const music = {
  title: "",
  singer: "",
  durations: 0.0,
  genre: "",
};

const playlists = [];

function addMusicToPlaylist(playlist, music) {
  playlist.push(music);
}

function removeMusicFromPlaylist(playlist, index) {
  playlist.splice(index, 1);
}

function createPlaylistByGenre(playlists, genre) {
  return playlists.filter((playlist) => playlist.genre === genre);
}

function calculateTotalDuration(playlist) {
  return playlist.reduce((total, music) => total + music.durations, 0);
}

function sortMusicByDuration(playlists) {
  return playlists.sort((a, b) => a.durations - b.durations);
}

// Example usage:
