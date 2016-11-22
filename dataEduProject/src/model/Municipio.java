package model;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Municipio {

	private Integer id;
	private String label;

	public Municipio(Integer id, String nomeMunicipio) {
		super();
		this.id = id;
		this.label = nomeMunicipio;
	}

	public Municipio() {
		super();
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getLabel() {
		return label;
	}

	public void setLabel(String nomeMunicipio) {
		this.label = nomeMunicipio;
	}

	@Override
	public String toString() {
		return "Municipio [id=" + id + ", label=" + label + "]";
	}
	
	

}
