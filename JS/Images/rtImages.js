function rtImages(){
	let rtImagesImageItemLength = document.getElementsByClassName("rtImage");
	
	for(let i = 0; i < rtImagesImageItemLength.length; i ++){
		switch(document.getElementsByClassName("rtImage").item(i).alt){
			case "rt":
				document.getElementsByClassName("rtImage").item(i).src = "https://lh3.googleusercontent.com/pw/AM-JKLUv-Fe1wcfeKi0U0IhaivmWj8e9CgKhd8lMX-7TsqwxP6MeQOuBzmLTvnGA5jLmaqQL_ETKz17pzEYuKXgqJPW3cH7vieoI_5-c1GXUuKuoTasvOOR1lysGVRDEMRyA0ppSDrUEhmpB1Dqn9qIEd16t=s51-no?authuser=0";
				break;
		}
	}
}