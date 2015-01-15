/*
 *	GET contact page
 */


exports.index = function(req, res){
	res.rener('contact', { title: 'Contact'})
};
