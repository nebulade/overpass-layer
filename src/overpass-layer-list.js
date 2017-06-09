function OverpassLayerList(parentDom, layer) {
  layer.onAppear = this.addObject.bind(this)
  layer.onDisappear = this.delObject.bind(this)
  this.dom = document.createElement('ul')
  this.dom.className = 'overpass-layer-list'
  parentDom.appendChild(this.dom)
  this.items = {}
}

OverpassLayerList.prototype.addObject = function (ob) {
  var div = document.createElement('li')

  this.items[ob.id] = div

  var a = document.createElement('a')
  a.className = 'title'
  a.href = '#'
  a.onclick = function (ob) {
    ob.feature.openPopup()
    return false
  }.bind(this, ob)

  a.innerHTML = ob.data.featureTitle

  div.appendChild(a)

  this.dom.appendChild(div)
}

OverpassLayerList.prototype.delObject = function (ob) {
  var div = this.items[ob.id]

  this.dom.removeChild(div)
  delete this.items[ob.id]
}

module.exports = OverpassLayerList
