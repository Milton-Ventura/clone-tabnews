function status(request, response) {
  response.status(200).json({ mensagem: "Sou fodelão, digdim" });
}

export default status;
