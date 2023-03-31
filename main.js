const linksSocialMedia = {
  github: 'ericojonck',
  instagram: 'erico_jonck',
  whatsapp:
    'send?phone=5548988702002&text=Ol%C3%A1+%C3%89rico%2C+gostaria+de+conversar+com+voc%C3%AA.&app_absent=0',
  facebook: 'erico.jonck'
}

function changeSocialMediaLinks(links) {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    if (li.getAttribute('class') === 'whatsapp') {
      li.children[0].href = `https://web.${social}.com/${linksSocialMedia[social]}`
    }
  }
}
changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGithubProfileInfos()
