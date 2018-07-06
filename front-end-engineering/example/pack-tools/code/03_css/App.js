import img from './01.jpg'

var App = {
    template: `
        <div>
            <img :src="imgSrc" />
        </div>
    `,
    data() {
        return {
            imgSrc: img 
        }
    }
}

export default App