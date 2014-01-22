package br.com.tests.entidade;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;

@Entity
public class Contato implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id 
	@GeneratedValue
	private Long id;
	
	@NotNull
	@Column(name = "NOME")
	private String nome;
	
	@OneToOne(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	private Telefone telefoneCelular;
	
	@OneToOne(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	private Telefone telefoneResidencial;
	
	@OneToOne(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	private Telefone telefoneComercial;

	@Column(name = "EMAIL")
	private String email;
	
	public Contato(){
		this.telefoneCelular = new Telefone();
		this.telefoneComercial = new Telefone();
		this.telefoneResidencial = new Telefone();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Telefone getTelefoneCelular() {
		return telefoneCelular;
	}

	public void setTelefoneCelular(Telefone telefoneCelular) {
		this.telefoneCelular = telefoneCelular;
	}

	public Telefone getTelefoneResidencial() {
		return telefoneResidencial;
	}

	public void setTelefoneResidencial(Telefone telefoneResidencial) {
		this.telefoneResidencial = telefoneResidencial;
	}

	public Telefone getTelefoneComercial() {
		return telefoneComercial;
	}

	public void setTelefoneComercial(Telefone telefoneComercial) {
		this.telefoneComercial = telefoneComercial;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
}
