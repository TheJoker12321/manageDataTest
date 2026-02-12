import './section.css'


export default function Section({data}) {

    console.log(data,"kjhgf");
    

    return (

        <section>

        {data.map((data, index) => {

            console.log(data,"jmhg");
            
         return(

           <div className='terorist' key={index}>
                <div className='head-details'>
                    <img src={data.imageUrl || 'src/components/section/teroristImage/terorist.webp'} alt="terorist image" />
                    <div>
                        <h3>{data.name}</h3>
                        <p>{data.organization}</p>
                    </div>
                    <h4>{data.organization}</h4>
                    <button>Attacks {" "} {data.attacksCount}</button>
                </div>
                <div className='more-details'>
                    <button>{data.status}</button>
                    <div>{data.relationToIsraelSummary}</div>
                    <button><svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="currentColor" fill-rule="evenodd" d="M117.333 256c0-17.673-14.327-32-32-32s-32 14.327-32 32s14.327 32 32 32s32-14.327 32-32m341.333 0c0-17.673-14.327-32-32-32s-32 14.327-32 32s14.327 32 32 32s32-14.327 32-32M288 256c0-17.673-14.327-32-32-32s-32 14.327-32 32s14.327 32 32 32s32-14.327 32-32"/></svg></button>
                </div>
            </div>
         )
            }
        )}

        </section>
    )
}