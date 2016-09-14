var memjs = require('memjs');

var mc = memjs.Client.create('<MEMCACHED_INSTANCE_SERVER_URL>:<MEMCACHED_INSTANCE_PORT>', {
  username: '<MEMCHACHED_INSTANCE_USERNAME>',
  password: '<MEMCHACHED_INSTANCE_PASSWORD>'
});    

function get ( key, callback){
	mc.get(key, function ( err, data){
		if ( err){
			callback ( err)
		}else {
			var returnValue = JSON.parse( data) ;
			console.log ( "got value for key" + key + " value " + data );
			callback( null , returnValue );
		}
	})
}


function set ( key, value){
	
	if ( value ){
		mc.set( key, JSON.stringify( value) ) ;
		console.log ( "set for " + key + " successfully")
	}
}

module.exports = {
		
		get: get,
		set: set
}
