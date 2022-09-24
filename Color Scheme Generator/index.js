const color = document.getElementById('input-color')
const getSchemeBtn = document.getElementById('get-scheme')
const colorCont = document.getElementById('color-cont')

const scheme = document.getElementById('scheme')

let hex = "#000000"
let mode = "monochrome"
let url = ""
let fetchedArray = []

scheme.addEventListener('change', (e) => {
    mode = e.target.value
    console.log(mode)
})



color.addEventListener('change', function(e){
    let val = e.target.value
    hex = val.substring(1,val.length)
    console.log(hex)
})

function renderFooter(){
    let html = ""
    for(let palet of fetchedArray){
        let hexCode = palet.hex.value
        console.log(hexCode)
        html += `
          <p>${hexCode}</p>
        `
    }
    document.querySelector('footer').innerHTML = html
}

function renderScheme(){
    let html = ""
    for(let palet of fetchedArray){
        let hexCode = palet.hex.value
        console.log(hexCode)
        html += `
          <div style= "background : ${hexCode};"></div>
        `
    }
    colorCont.innerHTML = html
    renderFooter()
}
function fetchSchemes(){
    fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}&count=6`)
    .then(res => res.json())
    .then((data) => {
       fetchedArray = data.colors
       renderScheme() 
    } )
}

getSchemeBtn.addEventListener('click', fetchSchemes)

// {
// 		hex: {
// 			value: "#866363",
// 			clean: "866363"
// 		},
// 		rgb: {
// 			fraction: {
// 				r: 0.5254901960784314,
// 				g: 0.38823529411764707,
// 				b: 0.38823529411764707
// 			},
// 			r: 134,
// 			g: 99,
// 			b: 99,
// 			value: "rgb(134, 99, 99)"
// 		},
// 		hsl: {
// 			fraction: {
// 				h: 0,
// 				s: 0.15021459227467812,
// 				l: 0.45686274509803926
// 			},
// 			h: 0,
// 			s: 15,
// 			l: 46,
// 			value: "hsl(0, 15%, 46%)"
// 		},
// 		hsv: {
// 			fraction: {
// 				h: 0,
// 				s: 0.2611940298507463,
// 				v: 0.5254901960784314
// 			},
// 			value: "hsv(0, 26%, 53%)",
// 			h: 0,
// 			s: 26,
// 			v: 53
// 		},
// 		name: {
// 			value: "Sand Dune",
// 			closest_named_hex: "#826F65",
// 			exact_match_name: false,
// 			distance: 630
// 		},
// 		cmyk: {
// 			fraction: {
// 				c: 0,
// 				m: 0.2611940298507464,
// 				y: 0.2611940298507464,
// 				k: 0.4745098039215686
// 			},
// 			value: "cmyk(0, 26, 26, 47)",
// 			c: 0,
// 			m: 26,
// 			y: 26,
// 			k: 47
// 		},
// 		XYZ: {
// 			fraction: {
// 				X: 0.425621568627451,
// 				Y: 0.4174156862745098,
// 				Z: 0.4254372549019608
// 			},
// 			value: "XYZ(43, 42, 43)",
// 			X: 43,
// 			Y: 42,
// 			Z: 43
// 		},
// 		image: {
// 			bare: "https://www.thecolorapi.com/id?format=svg&named=false&hex=866363",
// 			named: "https://www.thecolorapi.com/id?format=svg&hex=866363"
// 		},
// 		contrast: {
// 			value: "#ffffff"
// 		},
// 		_links: {
// 			self: {
// 				href: "/id?hex=866363"
// 			}
// 		},
// 		_embedded: {}
// 	}