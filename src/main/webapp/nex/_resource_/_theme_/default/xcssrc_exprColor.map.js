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
															"color" : nexacro.ColorObject("whitesmoke")
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
															"color" : nexacro.ColorObject("whitesmoke")
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
