// Cal State LDAP server parameters configuration
var ldap =  require("ldapjs");
//create LDAP client connect
var client = ldap.createClient({
  url: 'ldap://address'
});


var opts = {
  filter: '', 
  scope: '',      
  timeLimit: 500    
};


client.bind('user', 'password', function (err, outRespond) {
    console.log(err,"====err")
    client.search('path', opts, function (err, respond) {

        respond.on('searchEntry', function (entry) {
            
            // respond obj
            var user = entry.object;
            var userText = JSON.stringify(user,null,2);
            console.log(userText);
            
        });
        
        respond.on('searchReference', function(referral) {
            console.log('referral: ' + referral.uris.join());
        });    
        

        respond.on('error', function(err) {
            console.error('error: ' + err.message);

            client.unbind();
        });
        

        respond.on('end', function(result) {
            console.log('search status: ' + result.status);

            client.unbind();
        });        
        
    });
    
});