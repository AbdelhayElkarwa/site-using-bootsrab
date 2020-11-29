/*

active = document.getElementById('act')
$('.feature-work ul li').on('click', () => {
    active.style.backgroundColor = 'white'
    active.style.color = '#08526d'
    style.backgroundColor = 'red'
})

let web = document.getElementById('web')

let all = document.getElementById('all')

let webshow = document.getElementById('website')
web.addEventListener('click', () => {



    all.style.opacity = '.09'
    webshow.style.opacity = .9
});*/


let web = document.getElementById('web')
let logooo = document.getElementById('Logo')


let website = document.getElementById('website')
let logos = document.getElementById('logos')
let logoss = document.getElementById('logoss')
let marketing = document.getElementById('marketing')
let marketingg = document.getElementById('marketingg')
let graphics = document.getElementById('graphics')
let videos = document.getElementById('videos')
let videoss = document.getElementById('videoss')

web.addEventListener('click', () => {

    website.style.visibility = 'visible'
    logos.style.visibility = 'hidden'
    logoss.style.visibility = 'hidden'
    marketing.style.visibility = 'hidden'
    marketingg.style.visibility = 'hidden'
    graphics.style.visibility = 'hidden'

    videos.style.visibility = 'hidden'
    videoss.style.visibility = 'hidden'

})


logooo.addEventListener('click', () => {

    website.style.visibility = 'hidden'
    logos.style.visibility = 'visible'
    logoss.style.visibility = 'visible'
    marketing.style.visibility = 'hidden'
    marketingg.style.visibility = 'hidden'
    graphics.style.visibility = 'hidden'

    videos.style.visibility = 'hidden'
    videoss.style.visibility = 'hidden'

})

let shoping = document.getElementById('Market')

shoping.addEventListener('click', () => {
    website.style.visibility = 'hidden'
    logos.style.visibility = 'hidden'
    logoss.style.visibility = 'hidden'
    marketing.style.visibility = 'visible'
    marketingg.style.visibility = 'visible'
    graphics.style.visibility = 'hidden'

    videos.style.visibility = 'hidden'
    videoss.style.visibility = 'hidden'
})


let showing = document.getElementById('Graphic')

showing.addEventListener('click', () => {
    website.style.visibility = 'hidden'
    logos.style.visibility = 'hidden'
    logoss.style.visibility = 'hidden'
    marketing.style.visibility = 'hidden'
    marketingg.style.visibility = 'hidden'
    graphics.style.visibility = 'visible'

    videos.style.visibility = 'hidden'
    videoss.style.visibility = 'hidden'
})

let video = document.getElementById('Video')

video.addEventListener('click', () => {
    website.style.visibility = 'hidden'
    logos.style.visibility = 'hidden'
    logoss.style.visibility = 'hidden'
    marketing.style.visibility = 'hidden'
    marketingg.style.visibility = 'hidden'
    graphics.style.visibility = 'hidden'

    videos.style.visibility = 'visible'
    videoss.style.visibility = 'visible'
})

let all = document.getElementById('all')
all.addEventListener('click', () => {
    website.style.visibility = 'visible'
    logos.style.visibility = 'visible'
    logoss.style.visibility = 'visible'
    marketing.style.visibility = 'visible'
    marketingg.style.visibility = 'visible'
    graphics.style.visibility = 'visible'

    videos.style.visibility = 'visible'
    videoss.style.visibility = 'visible'
})
