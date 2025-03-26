function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/assets/avatar-light.png")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/assets/avatar.png")
  }

  // substituir o alt
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a descrição do img light
    img.setAttribute("alt", "Foto do Katsuma em um aeroporto com a mãe dele.")
  } else {
    // se tiver sem light mode, manter a descrição da img sem light
    img.setAttribute(
      "alt",
      "Foto do Katsuma de costa em um campeonato de Valorant."
    )
  }

  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }
}
