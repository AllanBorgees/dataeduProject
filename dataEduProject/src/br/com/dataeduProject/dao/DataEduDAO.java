package br.com.dataeduProject.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

import model.Municipio;
import br.com.dataeduProject.factory.ConexaoFactory;

public class DataEduDAO {

	private static DataEduDAO instancia = new DataEduDAO();

	private DataEduDAO() {
	}

	public static DataEduDAO getInstancia() {
		return instancia;
	}

	public ArrayList<Municipio> municipios() {
		ArrayList<Municipio> e = new ArrayList<>();

		StringBuilder sql = new StringBuilder();

		sql.append("SELECT codigo_do_municipio, nome_municipio ");
		sql.append("FROM municipio ");

		try {
			Connection conexao = ConexaoFactory.conectar();
			PreparedStatement comando = conexao
					.prepareStatement(sql.toString());
			ResultSet resultado = comando.executeQuery();

			while (resultado.next()) {
				Municipio municipio = new Municipio();
				municipio.setId(resultado.getInt("codigo_do_municipio"));
				municipio.setLabel(resultado
						.getString("nome_municipio"));
				e.add(municipio);
			}
		} catch (Exception es) {
			es.printStackTrace();
		}
		System.out.println("acabou o metodo");
		return e;
	}

	public static void main(String[] args) {
			System.out.println(DataEduDAO.getInstancia().municipios());
	}

}
