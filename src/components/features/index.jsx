import Typography from '../common/Typography.jsx'

function Features() {

  const features = [{
    icon:"./src/assets/icons/delivery.svg",
    title:"Next day as standard",
    content:"Order before 3pm and get your order the next day as standard"
  },
  {
    icon:"./src/assets/icons/checkmark.svg",
    title:"Made by true artisans",
    content:"Handmade crafted goods made with real passion and craftmanship"
  },
  {
    icon:"./src/assets/icons/purchase.svg",
    title:"Unbeatable prices",
    content:"For our materials and quality you won’t find better prices anywhere"
  },
  {
    icon:"./src/assets/icons/sprout.svg",
    title:"Recycled packaging",
    content:"We use 100% recycled packaging to ensure our footprint is manageable"
  }
]

// utiliser un map pour rendre 4 x le même composant  FeatureBlock
  
  return (
    <>
    <Typography customClasses="flex justify-center m-[3.19rem]" tag="h3">What makes our brand different</Typography>
    <div className='flex justify-between'>{
        features.map(feature => 
            <div key={feature}>
                <img className='mb-4' src={feature.icon} alt="icones" />
                <Typography customClasses="mb-[0.5rem]" tag="h4">{feature.title}</Typography>
                <Typography>{feature.content}</Typography>
            </div>
        )}
    </div>
    </>
  )
}

export default Features