package com.group.resumefactory.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "UserContentMapping")
public class UserContentMapping extends BaseEntities{
	
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;
	
	@Column(name = "content_id")
	private Long contentId;
	
	@Column(name = "status")
	private String status;
	
	
	
}
