const appConfig = {
    baseUrl: "https://live.membroz.com/api/",
    headers: {
        'Content-Type': 'application/json',
        'authkey': '5fd84c9ad124bd0afdd65cbf'
    },
}
const branchid ='5fd84c9ad124bd0afdd65cbd'
const userId = '5fd84c9ad124bd0afdd65cbf'




export class commonService{
    
gethotels()
 {
     
    const body =
    {
        "search": [
            { "searchfield": "branchid", "searchvalue": branchid, "criteria": "eq", "datatype": "objectid" }
        ]
    }
 
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: appConfig.headers,

    };

    return fetch(appConfig.baseUrl + 'resorts/filter' , requestOptions)
        .then(response => response.json())
        .catch(error => {
            console.error('There was an error!', error);
        });
  }

  getIdwisehotel(_id)
  {
    const body =
    {
        "search": [
            { "searchfield": "status", "searchvalue": "active", "criteria": "eq"},
            { "searchfield": "_id", "searchvalue": _id, "criteria": "eq"}
        ]
    }
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: appConfig.headers,

    };

    return fetch(appConfig.baseUrl + 'resorts/filter' , requestOptions)
        .then(response => response.json())

        .catch(error => {
            console.error('There was an error!', error);

        });
        
  }

  getresortbylocation(_id)
  {
    const body =
    {
        "search": [
            { "searchfield": "status", "searchvalue": "active", "criteria": "eq" },
            { "searchfield": "location", "searchvalue": _id, "criteria": "eq","datatype": "objectid"}
        ]
    }
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: appConfig.headers,
    };

    return fetch(appConfig.baseUrl + 'resorts/filter' , requestOptions)
        .then(response => response.json())
        .catch(error => {
            console.error('There was an error!', error);
        });

  }


getBestplaces()
{
    const body =
    {
        "search": [
            { "searchfield": "status", "searchvalue": "active", "criteria": "eq"}
        ],
        "limit":10
    }
 
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: appConfig.headers,

    };

    return fetch(appConfig.baseUrl + 'resortlocations/filter' , requestOptions)
        .then(response => response.json())
        .catch(error => {
            console.error('There was an error!', error);
        });
  

}

 getHotelList(){
    const body =
    {
        "search":[
            {"searchfield": "status", "searchvalue": "active", "criteria": "eq", "datatype": "objectid"}
        ]
    }
    const requestOptions = {
        method: 'GET',
        headers: appConfig.headers,
        // body: JSON.stringify(body)
    };

    return fetch(appConfig.baseUrl + 'resortlocations' , requestOptions)
        .then(response => response.json())
        
        .catch(error => {
            console.error('There was an error!', error);
        });
}
getResortList(){
    const body =
    {
        "search":[
            {"searchfield": "status", "searchvalue": "active", "criteria": "eq", "datatype": "objectid"}
        ]
    }
    const requestOptions = {
        method: 'GET',
        headers: appConfig.headers,
        // body: JSON.stringify(body)
    };
    return fetch(appConfig.baseUrl + 'resorts' , requestOptions)
    .then(response => response.json())
    
    .catch(error => {
        console.error('There was an error!', error);
    });

} 

getpackage()
{
        const requestOptions = {
        method: 'POST',
        headers: appConfig.headers,

    };

    return fetch(appConfig.baseUrl + 'memberships/filter' , requestOptions)
        .then(response => response.json())
        .catch(error => {
            console.error('There was an error!', error);
        });
  

}

Addpros(data) {
    const body = JSON.stringify(data)
    const requestOptions = {
        method: 'POST',
        headers: appConfig.headers,
        body: body
    };
    return fetch(appConfig.baseUrl + 'prospects', requestOptions)
        .then(response => response.json())
        .catch(error => {
            //this.setState({ errorMessage: error });
            console.error('There was an error!', error);
        });

}

Addbookings(data) {
    const body = JSON.stringify(data)
    const requestOptions = {
        method: 'POST',
        headers: appConfig.headers,
        body: body
    };
    return fetch(appConfig.baseUrl + 'bookings', requestOptions)
        .then(response => response.json())
        .catch(error => {
            //this.setState({ errorMessage: error });
            console.error('There was an error!', error);
        });

}

getContactUs(){
    const requestOptions = {
            method : 'GET',
            headers: appConfig.headers,

    }
    return fetch(appConfig.baseUrl + 'users/' +userId, requestOptions)
    .then(response => response.json())
    .catch(error => {
        console.error('There was an error', error)
    });
}

getCar(){
    const body =
    {
        "search": [
            { "searchfield": "status", "searchvalue": "active", "criteria": "eq", "datatype": "objectid"}
        ]
    }
    const requestOptions = {
        method: 'GET',
        headers: appConfig.headers,
        // body: JSON.stringify(body)
    };

    return fetch(appConfig.baseUrl + 'inventoryitems' , requestOptions)
    .then(response => response.json())
    .catch(error => {
        console.error('There was an error', error)
    });
}

}