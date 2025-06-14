function handlerErrors(error,request,response,next) {
    console.error (error)
    response.status(error.status || 500).json({
        success : false,
        message: error.status || 'Un error ocurrio Por favor intentarlo mas tarde',
    })
    next()
}

export default handlerErrors