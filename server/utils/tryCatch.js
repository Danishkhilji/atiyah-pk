const tryCatch = async (handler) => {
    try {
      return await handler();
    } catch (error) {
      console.error('An error occurred:', error);
      throw error; 
    }
  };
  
  module.exports = tryCatch;
  