(function()
{
	return function()
	{
		nexacro._setCSSMaps(
		{
			"cell" :
			{
				"class" :
				[
					{
						"Expr_red" :
						{
							"parent" :
							{
								"row" :
								{
									"parent" :
									{
										"body" :
										{
											"parent" :
											{
												"Grid" :
												{
													"self" :
													{
														"enabled" :
														{
															"color" : nexacro.ColorObject("#ffffff")
														},
														"mouseover" :
														{
															"color" : nexacro.ColorObject("#d23636")
														}
													}
												}
											}
										}
									}
								}
							}
						}
					},
					{
						"Expr_blue" :
						{
							"parent" :
							{
								"row" :
								{
									"parent" :
									{
										"body" :
										{
											"parent" :
											{
												"Grid" :
												{
													"self" :
													{
														"enabled" :
														{
															"color" : nexacro.ColorObject("#ffffff")
														},
														"mouseover" :
														{
															"color" : nexacro.ColorObject("#ffffff")
														}
													}
												}
											}
										}
									}
								}
							}
						}
					},
					{
						"Expr_yellow" :
						{
							"parent" :
							{
								"row" :
								{
									"parent" :
									{
										"body" :
										{
											"parent" :
											{
												"Grid" :
												{
													"self" :
													{
														"enabled" :
														{
															"color" : nexacro.ColorObject("#ffffff")
														},
														"mouseover" :
														{
															"color" : nexacro.ColorObject("#ab9f1b")
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				]
			}
		},
		{
			"includeStatusMap" : true
		}
		);

		var imgcache = nexacro._getImageCacheMaps();
		
	};
}
)();
