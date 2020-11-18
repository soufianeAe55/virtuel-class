import React from 'react'
import SideNav from '../../Dashboard/sideNav'
import {Link,withRouter} from 'react-router-dom'
import Menu from '../../Dashboard/Menu'
import '../../../styles/Myclass.css'
import Devoir from '../ImageEtd/Group 44.svg'
import UserDev from '../ImageEtd/Group 58.svg'
import DevoirsX from '../ImageEtd/Group 53.svg'
import Time from '../ImageEtd/Group99.svg'
import Upload from '../ImageEtd/UpLoad.svg'



function DevoirContent(props){
	const Retour = () => {
		props.history.push('/devoirs');
	}

	return(
		 <React.Fragment>
			
				<SideNav />
				<div className="sous-app" >
					<Menu />
					<div className="row justify-content-around cont" >
						<div className="devCont row justify-content-between col-12 col-lg-10 col-md-12 col-sm-12 col-xl-10 DevoirContent" >
							<div className="TitleDev col-12 col-sm-12 col-md-9 col-lg-9 col-lx-9">
								<img src={DevoirsX} className="IconDev" />
								<div className="NameDev">
									<h2>Tp Linux processeur</h2>
									<p>Professeur - 26 sept</p>
								</div>
							</div>

							<div className="LimiteDev align-self-center col-12 col-sm-12 col-md-3 col-lg-3 col-lx-3">
									<img src={Time} /> <p>Date limite : 28 sept</p>
							</div>
							<div className="ContentDev align-self-center col-12 col-sm-12 col-md-12 col-lg-12 col-lx-12">
									<p>lorem lorem lorem lofh orf
									 lorem lorem l lorem lorem lorem lofh orf 
									 lorem lorem l lorem lorem lorem
									 lofh orf loorem lorem lorem, lorem lorem lorem
									  lofh orf lorem lorem l lorem lorem lorem.
									   </p>
							</div>
							<div className="upload row justify-content-start col-12 col-lg-10 col-md-12 col-sm-12 col-xl-12">
								<label forHtml="inpt" >
									<input type="file" id="inpt" hidden />
									<img src={Upload} />
									<div className="uploadConditions">
										<p>Max size: 1mb </p>
										<p>Doc,pdf</p>
									</div>
								</label>
							</div>
							<div className="buttons row justify-content-end col-12 col-lg-10 col-md-12 col-sm-12 col-xl-12">
								<button className="ajouter" >Ajouter</button>
								<button className="annuler">Annuler</button>
								<button className="retour" onClick={() => {Retour()}} >Retour</button>
							</div>
						</div>
					</div>
						
					
					
				</div>
			
		 </React.Fragment>

		)
}

export default withRouter(DevoirContent)