// Custom middleware that logs out the type and path of each request to the server
const clog = (req, res, next) => {
    const getBlue = '\x1b[34m';
    const postGreen = '\x1b[32m';
    const getRed = '\x1b[31m';
    switch (req.method) {
      case 'GET': {
        console.info(`📘 ${getBlue}${req.method} request to ${req.path}`);
        break;
      }
      case 'POST': {
        console.info(`📗 ${postGreen}${req.method} request to ${req.path}`);
        break;
      }
      default:
        console.log(`📙${getRed}${req.method} request to ${req.path}`);
    }
  
    next();
  };
  
  exports.clog = clog;
  