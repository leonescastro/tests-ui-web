package br.com.tests.apresentacao.action;


import java.util.List;

import javax.persistence.EntityManager;

import org.jboss.seam.ScopeType;
import org.jboss.seam.annotations.Begin;
import org.jboss.seam.annotations.End;
import org.jboss.seam.annotations.Factory;
import org.jboss.seam.annotations.In;
import org.jboss.seam.annotations.Name;
import org.jboss.seam.annotations.Out;
import org.jboss.seam.annotations.Scope;
import org.jboss.seam.annotations.datamodel.DataModel;
import org.jboss.seam.annotations.datamodel.DataModelSelection;

import br.com.tests.entidade.Contato;

@Name("contatoAction")
@Scope(ScopeType.CONVERSATION)
public class ContatoAction {

	@In
	private EntityManager entityManager;
	
	@DataModel
	private List<Contato> contatos;
	
	@DataModelSelection
	@Out(required=false)
	private Contato contato;
	
	@Factory("contatos")
	@SuppressWarnings("unchecked")
	public void listarContatos() {
		//seleciona todos os contatos
		contatos = entityManager.createQuery("select c from Contato c").getResultList();
	}
	
	@Begin
	public String novoContato() {
		contato = new Contato();
		
		return "novoContato";
	}
	
	@Begin
	public String editarContato() {
		//atualiza os dadis do contato para fazer a edição
		entityManager.refresh(contato);
		
		return "editarContato";
	}
	
	public String removerContato() {
		//remove o contato
		entityManager.remove(contato);
		
		return "contatoRemovido";
	}
	
	@End
	public String salvarContato() {
		//se não tem id é porque deve ser inserido, caso contrário alterado
		if (contato.getId() == null) {
			entityManager.persist(contato);
		} else {
			entityManager.merge(contato);
		}
		
		return "contatoSalvo";
	}
}
