
const {createGzip, createDeflate} = require('zlib');

module.exports = (rs, req, res) =>{
  const acceptEncoding = req.headers['accept-encoding'];
  if(!acceptEncoding || !acceptEncoding.match(/\b(gzip|deflate)/)){
    return rs;
  }else if(acceptEncoding.match(/\bgzip/)) {
    res.setHeader('Content-Encoding', 'gzip' );
    return rs.pipe(createGzip());
  }else if(acceptEncoding.match(/\bdeflate/)) {
    res.setHeader('Content-Encoding', 'deflate' );
    return rs.pipe(createDeflate());
  }
};
