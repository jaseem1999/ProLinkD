
import './App.css';
import Employee from './Employee';

function App() {
 let pro = [{project : 'SFI MES KALLADI COLLEGE OFFICIAL WEBSITE ',projectd :"സാമ്പത്തികമായി പിന്നോക്കം നിൽകുന്ന വിദ്യാർഥിൾക്ക് പഠന സൗകര്യം ഉറപ്പു വരുത്തുക. വിദ്യാർത്ഥികൾക്ക് ആവശ്യമായ study materials, notes, എന്നിവ ലഭ്യമാകുക." , projectDetails : <a href="http://sfimeskc.in" >sfimeskc</a> , img : <img className="img-pro" src="https://jaseem1999.github.io/my-web-site-static/assets/img/sfisitw.png" alt="img"/>},
            {project : 'Dr Saleej kt',projectd :"Its official web site for Dr. Saleej kt", projectDetails : <a href="https://jaseem1999.github.io/Dr_saleej_sir/" >Dr_saleej_sir</a>, img : <img className="img-pro" src="https://jaseem1999.github.io/my-web-site-static/assets/img/2021-12-06.png" alt="img"/>},
           
          ]

  return (
     <div className="App">
       <h1 align="center"  >
         My Projects
       </h1>
       {
         pro.map((obj,index)=>{
           return (
             <Employee key={index} project={obj.project} projectd={obj.projectd} projectDetails = {obj.projectDetails} img = {obj.img} /> /* < Employee key = {index} {...obj} />  "we can use simple */
         )
         })
       }
     </div>
    
  );
}

export default App;
