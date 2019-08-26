(function () {
  const paper = new spritejs.Scene('#paper', {
    viewport: ['auto', 'auto'],
    resolution: [800, 600],
    stickMode: 'width',
    stickExtend: true,
  });

  const layer = d3.select(paper).append('fglayer');
  document.querySelector('#paper canvas').style.backgroundColor = '#222830';

  const width = 1330;
  const height = 520;

  const projection = d3.geoMercator()
    .center([107, 38])
    .scale(width / 2 - 40)
    .translate([width / 4 + 80, height / 2]);

  const path = d3.geoPath().projection(projection);

  d3.json('https://s1.ssl.qhres.com/static/6c6d50baf39026d5.json', (err, data) => {
    if(err) throw new Error(err);

    function china(data) {
        if (data.properties.name === "台湾省") {
            return false
        }
        return true
    }

    data.features = data.features.filter(china);

    layer.selectAll('path')
      .data(data.features)
      .enter()
      .append('path')
      .attr('strokeColor', 'rgba(0,0,0,0.4)')
      .attr('lineWidth', 1)
      .attr('d', path)
      .attr('renderMode', 'fill')
      .attr('fillColor', '#2f3644')
      .attr('bounding', 'path')
      .on('click', function (d) {
        const paths = this.findPath(d3.event.offsetX, d3.event.offsetY);

        if(paths.length) {
          /* eslint-disable no-console */
          console.log(d.properties.name);
          /* eslint-enable no-console */
        }
      })
      .on('mouseenter', function (d) {
        this.attr('fillColor', '#00c2ff');
      })
      .on('mouseleave', function (d) {
        this.attr('fillColor', '#2f3644');
      });
  });
}());
