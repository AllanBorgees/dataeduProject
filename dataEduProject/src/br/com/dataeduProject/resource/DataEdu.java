package br.com.dataeduProject.resource;

import java.util.ArrayList;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import model.Municipio;
import br.com.dataeduProject.dao.DataEduDAO;

@Path("/dataedu")
public class DataEdu {
	
	DataEduDAO dao = DataEduDAO.getInstancia();
	
	@GET
	@Path("/municipios")
	@Produces(MediaType.APPLICATION_JSON)
	public ArrayList<Municipio> getEstacoes() {
		return dao.municipios();
	}

}
