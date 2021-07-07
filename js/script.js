const btn = document.querySelector('.btn');

btn.addEventListener('click', function() {
	let text = document.querySelector('.form-control').value;
		fetch('https://api.covid19api.com/summary')
		.then((covidData) => {
			return covidData.json();
		})
		.then((getData) => {
			console.log(getData);
			let content = document.querySelector('.data');

			let box = content.lastElementChild;  
            while (box) { 
                content.removeChild(box); 
                box = content.lastElementChild; 
            } 

            let index = 0;
            for (let i = 0; i < 185; i++) {
                if (getData.Countries[i].Country.toLowerCase() == text.toLowerCase()) {
                    index = i;
                    break;
                }
            }
            let data = document.querySelector('.data');
            data.innerHTML = `<div class="container">
					  			<div class="row text-center mt-3 justify-content-center">
					  				<div class="col-10 col-sm-8 p-2 heading">
					  					<h1>Covid-19 Cases in ${getData.Countries[index].Country}</h1>
					  				</div>
					  			</div>
					  		</div>

					  		<div class="container">
					  			<div class="row text-center mt-5 justify-content-center data-wrapper">
					  				<div class="col-10 col-md-3 p-3 bg-primary bg-gradient text-white mb-4 mx-3 rounded-3">
					  					<h3>Total Confirmed</h3>
					  					<p>${getData.Countries[index].TotalConfirmed}</p>
					  				</div>
					  				<div class="col-10 col-md-3 p-3 bg-merah-2 bg-gradient text-white mb-4 mx-3 rounded-3">
					  					<h3>Total Deaths</h3>
					  					<p>${getData.Countries[index].TotalDeaths}</p>
					  				</div>
					  				<div class="col-10 col-md-3 p-3 bg-hijau-3 bg-gradient text-white mb-4 mx-3 rounded-3">
					  					<h3>Total Recovered</h3>
					  					<p>${getData.Countries[index].TotalRecovered}</p>
					  				</div>
					  				<div class="col-10 col-md-3 p-3 bg-danger bg-gradient text-white mb-4 mx-3 rounded-3">
					  					<h3>New Confirmed</h3>
					  					<p>${getData.Countries[index].NewConfirmed}</p>
					  				</div>
					  				<div class="col-10 col-md-3 p-3 bg-merah-5 bg-gradient text-white mb-4 mx-3 rounded-3">
					  					<h3>New Deaths</h3>
					  					<p>${getData.Countries[index].NewDeaths}</p>
					  				</div>
					  				<div class="col-10 col-md-3 p-3 bg-warning bg-gradient text-white mb-4 mx-3 rounded-3">
					  					<h3>New Recovered</h3>
					  					<p>${getData.Countries[index].NewRecovered}</p>
					  				</div>
					  			</div>
					  		</div>`;
		})
});
