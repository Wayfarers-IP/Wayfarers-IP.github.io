function foo(accoType){
    var search = document.getElementById('search-bar').value;

if(search != ""){
    var btn = document.getElementById('search-button');
    btn.disabled = true;
    btn.style.backgroundColor = '#000000';
    var searchContainer = document.getElementById('valuesId');
    searchContainer.innerHTML = 'Loading...';

    firebase.database().ref(accoType).orderByChild('place')
    .startAt(search)
    .endAt(search + "\uf8ff")
    .once("value").then(function(snapshot) {

        var x = snapshot.val();
        // window.alert(x);
        if(x == null){
            searchContainer.innerHTML = '';
            createSearchCard('nothing','nothing',false);
            btn.disabled = false;
            btn.style.backgroundColor = '#dd2c00';
        }else{
            searchContainer.innerHTML = '';
        snapshot.forEach(function(child){
            var x = child.val();
                // window.alert(x.place);
                createSearchCard(x.name,x.place,true);
                btn.disabled = false;
                btn.style.backgroundColor = '#dd2c00';
        });
    
    
    
        }
    
    
    });
}else{
    var searchContainer = document.getElementById('valuesId');
    searchContainer.innerHTML = '';
}
}
function createSearchCard(name,place,found){

        if(found){
            var link = ['https://www.trivago.in/en?themeId=280&sem_keyword=trivago&sem_creativeid=301632199872&sem_matchtype=e&sem_network=g&sem_device=c&sem_placement=&sem_target=&sem_adposition=1t1&sem_param1=&sem_param2=&sem_campaignid=259742967&sem_adgroupid=24450848727&sem_targetid=aud-101161073580%3Akwd-5593367084&sem_location=9061783&cip=9119000005&gclid=CjwKCAjwqLblBRBYEiwAV3pCJuUm1w76E3sJ9vn1XMP52xsXYBn1jCidc3EedhNbMIbWDHV-ZAMBehoC1bUQAvD_BwE',
                        'https://www.booking.com/index.en-gb.html?label=gen173nr-1BCAEoggI46AdIM1gEaGyIAQGYAQm4ARnIAQzYAQHoAQGIAgGoAgO4AsyVueUFwAIB;sid=05e7b6ce4cc2fb40e78f3f09c472f697;keep_landing=1&sb_price_type=total&',
                        'https://www.makemytrip.com/hotels/',
                        'https://www.goibibo.com/hotels/'];
            var linkName = ['Trivago','Booking','Make My Trip','Go Ibibo'];

            //Creating name div
            var nameDiv = document.createElement('div');
            nameDiv.innerHTML = name;
            nameDiv.className = 'searchHeading';


            //Creating place div
            var placeDiv = document.createElement('div');
            placeDiv.innerHTML = place;
            placeDiv.className = 'searchPlace';

            //Creating links div
            var bookNowSpan = document.createElement('span');
            bookNowSpan.className = 'searchBookNow';
            bookNowSpan.innerHTML = 'Book Now on';

            var linksDiv = document.createElement('div');
            for(var i=1;i<=4;i++){
                var span = document.createElement('span');
                var a = document.createElement('a');
                a.href = link[i-1];
                a.innerHTML = linkName[i-1];
                a.className = 'bookingLink green';
                span.appendChild(a);
                linksDiv.appendChild(span);
            }

            var bookDiv = document.createElement('div');
            bookDiv.appendChild(bookNowSpan);
            bookDiv.appendChild(linksDiv);

            var searchCardDiv = document.createElement('div');
            searchCardDiv.className = 'searchCard';
            searchCardDiv.appendChild(nameDiv);
            searchCardDiv.appendChild(placeDiv);
            searchCardDiv.appendChild(bookDiv);

            var searchContainer = document.getElementById('valuesId');
            searchContainer.appendChild(searchCardDiv);
        }else{
            var nameDiv = document.createElement('div');
            nameDiv.innerHTML = 'No Result Found';
            nameDiv.className = 'searchCard searchHeading';

            var searchContainer = document.getElementById('valuesId');
            searchContainer.appendChild(nameDiv);
        }
}