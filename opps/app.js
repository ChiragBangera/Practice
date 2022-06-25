class Color{
   constructor(r,g,b,name){
      this.r = r
      this.g = g
      this.b = b
      this.name = name
   }
   innerRgb(){
      const {r,g,b} = this
      return `${r},${g},${b}`
   }
   rgb(){
      console.log(`rgb(${this.innerRgb()})`)
   }
   rgba(a=1){
      console.log(`rgba(${this.innerRgb()},${a})`)
   }
}

const c1 = new Color(255,65,78,'color')

console.log(c1.rgb())
console.log(c1.rgba(.4))