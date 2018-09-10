let adSelectors = [
  'iframe',
  'aside .csdn-tracking-statistics.mb8.box-shadow',
  '.recommend-right'
]

document.querySelectorAll(adSelectors.join(',')).forEach(item => {
  item.style.display = 'none'
})

document.getElementsByTagName('main')[0].style.width = '75%'