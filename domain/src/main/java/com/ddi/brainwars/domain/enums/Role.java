package com.ddi.brainwars.domain.enums;


public enum Role {
	USER(0), MANAGER(1), ADMIN(2);

	private Integer roleNumber;

	private Role(Integer roleNumber) {
		this.roleNumber = roleNumber;
	}

	public Integer getRoleNumber() {
		return roleNumber;
	}

	public static Role valueOf(Integer courseNumber) {
		Role status = null;
		Role[] values = values();
		for (Role item : values) {
			if (courseNumber.equals(item.getRoleNumber())) {
				status = item;
				break;
			}
		}
		return status;
	}

}
