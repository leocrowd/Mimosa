function compartilharPagina() {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        url: window.location.href
      })
      .then(() => console.log('Página compartilhada com sucesso'))
      .catch((error) => console.error('Erro ao compartilhar página:', error));
    } else {
      alert('A funcionalidade de compartilhamento não é suportada por este navegador.');
    }
  }