
export default class LandingPage{
  constructor(data){
      this.data = data;
}

  renderData(){
    const tpl = this.data.map((item) =>{
      return `
      <nav class="nav1" id="navId">
      <ul>
      <li><img class="laddu"src="${item.img1}"</li>
      <li><p>${item.home}</p></li>
      <li><p id="menuji">${item.menu}</p></li>
      <li><a id="about" id="nav-link" href="#aboutId">${item.about}</a></li>
      <li><a href = "#service-Id">${item.services}</a></li>
      </ul>
      <div class="div1">${item.name} </div>
      <div class="div2">${item.name1}</div>
      <p class="para">${item.para}</p>
      </nav>

      <div class="container">
      <div class="image-container">
        <img class="image" src="${item.img}" alt="Image"> 
      </div>

      <div class="content-container" id="aboutId">
        <h1 class="same">About Us</h1>
        <h2 class="hindi">स्वागत है!</h2>
        <p class="same">"Our story began with a dream - a steadfast belief that food is not just a meal, but an experience. We prioritize excellence and consider freshness and flavor to be of utmost importance.The dishes crafted by our chefs are special, prepared with local and fresh ingredients. We pay attention to both warmth and taste, ensuring that each meal is a unique experience.
        We respect our customers and value their preferences. If you have any suggestions or concerns, please feel free to reach out to us.
        Being a part of our restaurant is a matter of pride for us, and we are ready to provide you with a unique and delightful experience."<br>
        
        <b>Thank you!</b></p>
        <button class="btn2">Read More</button>
      </div>
    </div>
    
      `
    }).join('');
    document.getElementById('render').innerHTML = tpl;
  }
}

const data = [
    {
      img1:'https://img.freepik.com/premium-vector/laddoo-cartoon-mascot-indian-food-vector-illustration_388759-458.jpg?w=2000',
      name:'WELCOME',
      name1:'TO LADDU',
      para:'We are always here to serve you.',
      home:'Home',
      about:'About Us',
      menu:'menu',
      services:'Services',
      contact:'Contact',
      booking:'booking',
      img: 'https://www.southernliving.com/thmb/rs_Aau_MRgEsa1TTIWsj3i4bn0I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2636201_Thank_Sweet_Potato_Stacks_0001-2000-c82478a0910d4829955aea27e7852485.jpg',
    }
]

const website = new LandingPage(data);
website.renderData();
