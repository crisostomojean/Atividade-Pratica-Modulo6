import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Api from '../../Api/Api'

export default function Create() {
	const [nome, setNome] = useState('')
	const [cpf, setCpf] = useState('')
	const [nascimento, setNascimento] = useState('')
	const [email, setEmail] = useState('')
	const { id } = useParams()
	const navigate = useNavigate()

	const criarOuEditarCliente = (e) => {
		e.preventDefault()

		const cliente = {id, nome, cpf, nascimento, email }

		if (id) {
			Api.put('/clientes/' + id, cliente).then((response) => {
				navigate('/Clientes')
			})
		} else {
			Api.post('/clientes/', cliente).then((response) => {
				navigate('/Clientes')
			})
		}
	}

	useEffect(() => {
		function getClienteById() {
			if (id) {
				Api.get(`/Clientes/${id}`)
					.then((response) => {
						setNome(response.data.nome)
						setCpf(response.data.cpf)
						setNascimento(response.data.nascimento)
						setEmail(response.data.email)
					})
					.catch((error) => {
						console.log(error)
					})
			}
		}
		getClienteById()
	}, [id])

	return (
		<div className="container py-3">
			<form>
				<fieldset>
					<legend>
						<h2 className="text-center">{id ? 'Editar' : 'Criar'}</h2>
					</legend>
					<div className="mb-3">
						<div className="align">
							<label><strong>NOME</strong></label>
							<input
								type="text"
								id="Nome"
								className="form-control s"
								placeholder="Nome"
								value={nome}
								onChange={(e) => setNome(e.target.value)}
							/>
						</div>
					</div>
					<div className="mb-3">
						<div className="align">
						<label><strong>CPF</strong></label>
							<input
								type="text"
								id="Cpf"
								className="form-control s"
								placeholder="Cpf"
								value={cpf}
								onChange={(e) => setCpf(e.target.value)}
							/>
							</div>
							</div>
							<div className="mb-3">
							  <div className="align">
							  <label><strong>NASCIMENTO</strong></label>
							   <input
								type="text"
								id="Nascimento"
								className="form-control s"
								placeholder="Nascimento"
								value={nascimento}
								onChange={(e) => setNascimento(e.target.value)}
							/>
							</div>
							</div>
							<div className="mb-3">
							<div className="align">

							<label><strong>EMAIL</strong></label>
							<input
								type="text"
								id="Email"
								className="form-control s"
								placeholder="Email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							</div>
						
					</div>
          <div className="d-flex justify-content-center">
					<button
						type="submit"
						className="btn btn-primary"
						onClick={(e) => criarOuEditarCliente(e)}
					>
						ENVIAR
					</button>
					<Link
						to="/Clientes"
						className="btn btn-danger"
						style={{ marginLeft: '10px' }}
					>
						CANCELAR
					</Link>
          </div>
				</fieldset>
			</form>
		</div>
	)
}
