const TarifInfo = ({tarifType}) =>{
	return(
					<div className='tarifDescription'>
						<h2 className='presence titleDes'>Journéee de présence</h2>
						<ul className='presence-list'>
							{tarifType.map((tarifa, i)=>{

								return(
									<li key={i}>
										{tarifa.icon && <img src={`./img/${tarifa.icon}`} alt={tarifa.tarif} width="32px" />}
										{tarifa.tarif}
										<span className='Tarifprice'>{tarifa.price}</span>
									</li>
								)
							})
							}</ul>
		</div>)
}





export default TarifInfo;