export default class ServicesData{
    constructor(data){
        console.log(data)
        this.data = data;
    }

renderServicesData(){
    console.log(this.renderServicesData);
    const html = this.data.map((items) => {
        return `<div class="services-container" id="service-Id">
        <div class="same-div"><img class="service-img" src =${items.img}>
        <h4>${items.h}</h4>
        <span>${items.p}</span>
        </div>
        <div class="same-div"><img class="service-img" src =${items.img1}>
        <h4>${items.h1}</h4>
        <span>${items.p1}</span>
        </div>
        <div class="same-div"><img class="service-img" src =${items.img2}>
        <h4>${items.h2}</h4>
        <span>${items.p2}</span>
        </div>
        <div class="same-div"><img class="service-img" src =${items.img3}>
        <h4>${items.h3}</h4>
        <span>${items.p3}</span>
        </div>
        <div class="same-div"><img class="service-img" src =${items.img4}>
        <h4>${items.h4}</h4>
        <span>${items.p4}</span>
        </div>
        <div class="same-div"><img class="service-img" src =${items.img5}>
        <h4>${items.h5}</h4>
        <span>${items.p5}</span>
        </div>
        <div class="same-div"><img class="service-img" src =${items.img6}>
        <h4>${items.h6}</h4>
        <span>${items.p6}</span>
        </div>
        <div class="same-div"><img class="service-img" src =${items.img7}>
        <h4>${items.h7}</h4>
        <span>${items.p7}</span>
        </div>
        <div class="same-div"><img class="service-img" src =${items.img8}>
        <h4>${items.h8}</h4>
        <span>${items.p8}</span>
        </div>

        </div>`
    }).join('')
   const create = document.createElement('div');
   render.append(create);
   create.innerHTML = html;
}
}

const servedata =[
    {
        img:'https://info.ehl.edu/hubfs/Blog-EHL-Insights/Blog-Header-EHL-Insights/culinary%20arts.jpeg',
        h:'Culinary Excellence',
        p:'Experience a symphony of flavors curated by our skilled chefs, using the finest ingredients to create dishes that delight the senses.',

        img1:'https://www.billhogg.ca/wp-content/uploads/2015/05/Dollarphotoclub_10-tip-for-impeccable-customer-service-e1430148435280.jpg',
        h1:'Impeccable Service',
        p1:'Our attentive staff is dedicated to ensuring your dining experience is seamless, from the moment you step through our doors to the final farewell.',

        img2:'https://www.thewaitersacademy.com/wp-content/uploads/2021/11/Untitled-design-49.png',
        h2:'Counter Services',
        p2:'It can create an efficient and hygienic workflow. It can improve speed of service. It can boost turnover and employer productivity.',

        img3:'https://i.pinimg.com/736x/fb/4a/30/fb4a30dbbb6aa6aa5d3d5d31b6bc6600.jpg',
        h3:'Artisanal Cocktails',
        p3:'Sip on expertly crafted cocktails, meticulously prepared with premium spirits and fresh, hand-picked ingredients.',

        img4:'https://tricolivingwell.com/wp-content/uploads/2021/07/Screen-Shot.png',
        h4:'Farm-to-Table Philosophy',
        p4:'We take pride in sourcing locally, forging relationships with farmers and producers to bring you the freshest.',

        img5:'https://www.privatediningrooms.co.uk/wp-content/uploads/2021/05/planning-a-private-dining-event-1024x683.jpg',
        h5:'Private Dining & Events',
        p5:'Host your special occasions in our elegant private dining spaces, where every detail is tailored to your unique.',

        img6:'https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/xkdarnij/ba4a02ac-6b4e-4f63-8e9b-a9fce4a4f2dc',
        h6:'Gourmet Delivery',
        p6:'Enjoy the same exceptional quality and taste of our cuisine in the comfort of your own home.',

        img7:'https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/qegjhdml/16ef009e-dbe4-4fad-a5fb-bb5c30b39636.jpg',
        h7:'Live Music & Entertainment',
        p7:'Enhance your dining experience with live music and entertainment, adding a touch and charm to your evening.',

        img8:'https://cdn.24.co.za/files/Cms/General/d/2282/f1202253b09949cd98f9d73fdc8da1dd.jpg',
        h8:'Vegetarian & Vegan Options',
        p8:'Catering to diverse palates, we offer a range of thoughtly crafted vegetarian.',
       
    }
] 
const service = new ServicesData(servedata);
service.renderServicesData();
