(function()
{
	return function()
	{
		nexacro._setCSSMaps(
		{
			"Form" :
			{
				"self" :
				{
					"enabled" :
					{
						"font" : nexacro.FontObject("12px Gulim"),
						"color" : nexacro.ColorObject("#555555"),
						"border" : nexacro.BorderObject("0px none")
					},
					"contents" :
					{
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#999999")
					}
				}
			},
			"titleicon" :
			{
				"parent" :
				{
					"titlebar" :
					{
						"parent" :
						{
							"MainFrame" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/titlebar_icon_nexacro17.ico')")
									}
								}
							}
						}
					},
					"TitleBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/img_TF_TitleIcon.png')"),
								"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
							}
						}
					}
				}
			},
			"Button" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #c2c2c2")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #a0a0a0")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #a0a0a0")
					},
					"pushed" :
					{
					},
					"selected" :
					{
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#bbbbbb"),
						"border" : nexacro.BorderObject("1px solid #d9d9d9")
					}
				},
				"class" :
				[
					{
						"btn_default" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"border" : nexacro.BorderObject("1px solid #0d6efd")
								},
								"disabled" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"border" : nexacro.BorderObject("1px solid #0d6efd")
								},
								"focused" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"border" : nexacro.BorderObject("1px solid #0d6efd")
								},
								"pushed" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"border" : nexacro.BorderObject("1px solid #0d6efd")
								},
								"selected" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"border" : nexacro.BorderObject("1px solid #0d6efd")
								},
								"mouseover_pushed" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("bold 12px/normal \"Malgun Gothic\"")
								},
								"mouseover_selected" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("bold 12px/normal \"Malgun Gothic\"")
								}
							}
						}
					},
					{
						"btn_exel" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#0d6efd"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"border" : nexacro.BorderObject("1px solid #0d6efd"),
									"icon" : nexacro.UrlObject("url('theme://images/Excel-Logo_15_15.png')"),
									"textPadding" : nexacro.PaddingObject("4px")
								},
								"disabled" :
								{
									"color" : nexacro.ColorObject("#0d6efd"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"border" : nexacro.BorderObject("1px solid #0d6efd"),
									"icon" : nexacro.UrlObject("url('theme://images/Excel-Logo_15_15.png')"),
									"textPadding" : nexacro.PaddingObject("4px")
								},
								"mouseover" :
								{
									"color" : nexacro.ColorObject("#0d6efd"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"border" : nexacro.BorderObject("1px solid #0d6efd"),
									"icon" : nexacro.UrlObject("url('theme://images/Excel-Logo_15_15.png')"),
									"textPadding" : nexacro.PaddingObject("4px")
								},
								"focused" :
								{
									"color" : nexacro.ColorObject("#0d6efd"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"border" : nexacro.BorderObject("1px solid #0d6efd"),
									"icon" : nexacro.UrlObject("url('theme://images/Excel-Logo_15_15.png')"),
									"textPadding" : nexacro.PaddingObject("4px")
								},
								"pushed" :
								{
									"color" : nexacro.ColorObject("#0d6efd"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"border" : nexacro.BorderObject("1px solid #0d6efd"),
									"icon" : nexacro.UrlObject("url('theme://images/Excel-Logo_15_15.png')"),
									"textPadding" : nexacro.PaddingObject("4px")
								},
								"selected" :
								{
									"color" : nexacro.ColorObject("#0d6efd"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"border" : nexacro.BorderObject("1px solid #0d6efd"),
									"icon" : nexacro.UrlObject("url('theme://images/Excel-Logo_15_15.png')"),
									"textPadding" : nexacro.PaddingObject("4px")
								}
							}
						}
					},
					{
						"btn_home" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"icon" : nexacro.UrlObject("url('theme://images/btn_home_15_15_wh.png')"),
									"textPadding" : nexacro.PaddingObject("4px"),
									"border" : nexacro.BorderObject("1px solid #0d6efd")
								},
								"disabled" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"icon" : nexacro.UrlObject("url('theme://images/btn_home_15_15_wh.png')"),
									"textPadding" : nexacro.PaddingObject("4px"),
									"border" : nexacro.BorderObject("1px solid #0d6efd")
								},
								"mouseover" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"icon" : nexacro.UrlObject("url('theme://images/btn_home_15_15_wh.png')"),
									"textPadding" : nexacro.PaddingObject("4px"),
									"border" : nexacro.BorderObject("1px solid #0d6efd")
								},
								"focused" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"icon" : nexacro.UrlObject("url('theme://images/btn_home_15_15_wh.png')"),
									"textPadding" : nexacro.PaddingObject("4px"),
									"border" : nexacro.BorderObject("1px solid #0d6efd")
								},
								"pushed" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"icon" : nexacro.UrlObject("url('theme://images/btn_home_15_15_wh.png')"),
									"textPadding" : nexacro.PaddingObject("4px"),
									"border" : nexacro.BorderObject("1px solid #0d6efd")
								},
								"selected" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"icon" : nexacro.UrlObject("url('theme://images/btn_home_15_15_wh.png')"),
									"textPadding" : nexacro.PaddingObject("4px"),
									"border" : nexacro.BorderObject("1px solid #0d6efd")
								}
							}
						}
					},
					{
						"btn_search" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_search.png')"),
									"textPadding" : nexacro.PaddingObject("4px"),
									"border" : nexacro.BorderObject("1px solid #0d6efd")
								},
								"disabled" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_search.png')"),
									"textPadding" : nexacro.PaddingObject("4px"),
									"border" : nexacro.BorderObject("1px solid #0d6efd")
								},
								"mouseover" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_search.png')"),
									"textPadding" : nexacro.PaddingObject("4px"),
									"border" : nexacro.BorderObject("1px solid #0d6efd")
								},
								"focused" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_search.png')"),
									"textPadding" : nexacro.PaddingObject("4px"),
									"border" : nexacro.BorderObject("1px solid #0d6efd")
								},
								"pushed" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_search.png')"),
									"textPadding" : nexacro.PaddingObject("4px"),
									"border" : nexacro.BorderObject("1px solid #0d6efd")
								},
								"selected" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_search.png')"),
									"textPadding" : nexacro.PaddingObject("4px"),
									"border" : nexacro.BorderObject("1px solid #0d6efd")
								}
							}
						}
					},
					{
						"btn_del" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"icon" : nexacro.UrlObject("url('theme://images/btn_delete_15_15.png')"),
									"textPadding" : nexacro.PaddingObject("4px"),
									"border" : nexacro.BorderObject("1px solid #1c0c7c")
								},
								"disabled" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"icon" : nexacro.UrlObject("url('theme://images/btn_delete_15_15.png')"),
									"textPadding" : nexacro.PaddingObject("4px"),
									"border" : nexacro.BorderObject("1px solid #1c0c7c")
								},
								"mouseover" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"icon" : nexacro.UrlObject("url('theme://images/btn_delete_15_15.png')"),
									"textPadding" : nexacro.PaddingObject("4px"),
									"border" : nexacro.BorderObject("1px solid #1c0c7c")
								},
								"focused" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"icon" : nexacro.UrlObject("url('theme://images/btn_delete_15_15.png')"),
									"textPadding" : nexacro.PaddingObject("4px"),
									"border" : nexacro.BorderObject("1px solid #1c0c7c")
								},
								"pushed" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"icon" : nexacro.UrlObject("url('theme://images/btn_delete_15_15.png')"),
									"textPadding" : nexacro.PaddingObject("4px"),
									"border" : nexacro.BorderObject("1px solid #1c0c7c")
								},
								"selected" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"icon" : nexacro.UrlObject("url('theme://images/btn_delete_15_15.png')"),
									"textPadding" : nexacro.PaddingObject("4px"),
									"border" : nexacro.BorderObject("1px solid #1c0c7c")
								}
							}
						}
					},
					{
						"btn_insert" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"icon" : nexacro.UrlObject("url('theme://images/btn_write_15_15.png')"),
									"textPadding" : nexacro.PaddingObject("4px"),
									"border" : nexacro.BorderObject("1px solid #0d6efd")
								},
								"disabled" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"icon" : nexacro.UrlObject("url('theme://images/btn_write_15_15.png')"),
									"textPadding" : nexacro.PaddingObject("4px"),
									"border" : nexacro.BorderObject("1px solid #0d6efd")
								},
								"mouseover" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"icon" : nexacro.UrlObject("url('theme://images/btn_write_15_15.png')"),
									"textPadding" : nexacro.PaddingObject("4px"),
									"border" : nexacro.BorderObject("1px solid #0d6efd")
								},
								"focused" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"icon" : nexacro.UrlObject("url('theme://images/btn_write_15_15.png')"),
									"textPadding" : nexacro.PaddingObject("4px"),
									"border" : nexacro.BorderObject("1px solid #0d6efd")
								},
								"pushed" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"icon" : nexacro.UrlObject("url('theme://images/btn_write_15_15.png')"),
									"textPadding" : nexacro.PaddingObject("4px"),
									"border" : nexacro.BorderObject("1px solid #0d6efd")
								},
								"selected" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"icon" : nexacro.UrlObject("url('theme://images/btn_write_15_15.png')"),
									"textPadding" : nexacro.PaddingObject("4px"),
									"border" : nexacro.BorderObject("1px solid #0d6efd")
								}
							}
						}
					},
					{
						"btn_logout" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"icon" : nexacro.UrlObject("url('theme://images/btn_logout.png')"),
									"textPadding" : nexacro.PaddingObject("4px")
								},
								"disabled" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"icon" : nexacro.UrlObject("url('theme://images/btn_logout.png')"),
									"textPadding" : nexacro.PaddingObject("4px")
								},
								"mouseover" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"icon" : nexacro.UrlObject("url('theme://images/btn_logout.png')"),
									"textPadding" : nexacro.PaddingObject("4px")
								},
								"focused" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"icon" : nexacro.UrlObject("url('theme://images/btn_logout.png')"),
									"textPadding" : nexacro.PaddingObject("4px")
								},
								"pushed" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"icon" : nexacro.UrlObject("url('theme://images/btn_logout.png')"),
									"textPadding" : nexacro.PaddingObject("4px")
								},
								"selected" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"icon" : nexacro.UrlObject("url('theme://images/btn_logout.png')"),
									"textPadding" : nexacro.PaddingObject("4px")
								}
							}
						}
					},
					{
						"btn_message" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"icon" : nexacro.UrlObject("url('theme://images/btn_message.png')"),
									"textPadding" : nexacro.PaddingObject("4px")
								},
								"disabled" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"icon" : nexacro.UrlObject("url('theme://images/btn_message.png')"),
									"textPadding" : nexacro.PaddingObject("4px")
								},
								"mouseover" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"icon" : nexacro.UrlObject("url('theme://images/btn_message.png')"),
									"textPadding" : nexacro.PaddingObject("4px")
								},
								"focused" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"icon" : nexacro.UrlObject("url('theme://images/btn_message.png')"),
									"textPadding" : nexacro.PaddingObject("4px")
								},
								"pushed" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"icon" : nexacro.UrlObject("url('theme://images/btn_message.png')"),
									"textPadding" : nexacro.PaddingObject("4px")
								},
								"selected" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"icon" : nexacro.UrlObject("url('theme://images/btn_message.png')"),
									"textPadding" : nexacro.PaddingObject("4px")
								}
							}
						}
					},
					{
						"btn_can" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"border" : nexacro.BorderObject("1px solid #1c0c7c")
								},
								"disabled" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"border" : nexacro.BorderObject("1px solid #1c0c7c")
								},
								"mouseover" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"border" : nexacro.BorderObject("1px solid #1c0c7c")
								},
								"focused" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"border" : nexacro.BorderObject("1px solid #1c0c7c")
								},
								"pushed" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"border" : nexacro.BorderObject("1px solid #1c0c7c")
								},
								"selected" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"border" : nexacro.BorderObject("1px solid #1c0c7c")
								}
							}
						}
<<<<<<< HEAD
=======
					},
					{
						"btn_pdf" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#0d6efd"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"icon" : nexacro.UrlObject("url('theme://images/img_WF_Grdimg.png')"),
									"textPadding" : nexacro.PaddingObject("4px"),
									"border" : nexacro.BorderObject("1px solid #0d6efd")
								},
								"disabled" :
								{
									"color" : nexacro.ColorObject("#0d6efd"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"icon" : nexacro.UrlObject("url('theme://images/img_WF_Grdimg.png')"),
									"textPadding" : nexacro.PaddingObject("4px"),
									"border" : nexacro.BorderObject("1px solid #0d6efd")
								},
								"mouseover" :
								{
									"color" : nexacro.ColorObject("#0d6efd"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"icon" : nexacro.UrlObject("url('theme://images/img_WF_Grdimg.png')"),
									"textPadding" : nexacro.PaddingObject("4px"),
									"border" : nexacro.BorderObject("1px solid #0d6efd")
								},
								"focused" :
								{
									"color" : nexacro.ColorObject("#0d6efd"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"icon" : nexacro.UrlObject("url('theme://images/img_WF_Grdimg.png')"),
									"textPadding" : nexacro.PaddingObject("4px"),
									"border" : nexacro.BorderObject("1px solid #0d6efd")
								},
								"pushed" :
								{
									"color" : nexacro.ColorObject("#0d6efd"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"icon" : nexacro.UrlObject("url('theme://images/img_WF_Grdimg.png')"),
									"textPadding" : nexacro.PaddingObject("4px"),
									"border" : nexacro.BorderObject("1px solid #0d6efd")
								},
								"selected" :
								{
									"color" : nexacro.ColorObject("#0d6efd"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"icon" : nexacro.UrlObject("url('theme://images/img_WF_Grdimg.png')"),
									"textPadding" : nexacro.PaddingObject("4px"),
									"border" : nexacro.BorderObject("1px solid #0d6efd")
								}
							}
						}
>>>>>>> 8f5af974195c2ae46f84e2a8e006a0a0a22f93e8
					}
				]
			},
			"FileDownload" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #c2c2c2")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #a0a0a0")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #a0a0a0")
					},
					"pushed" :
					{
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#bbbbbb"),
						"border" : nexacro.BorderObject("1px solid #d9d9d9")
					}
				}
			},
			"ButtonControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("0px none")
					}
				}
			},
			"fileuploaditem" :
			{
				"parent" :
				{
					"FileUpload" :
					{
						"self" :
						{
							"disabled" :
							{
								"color" : nexacro.ColorObject("#999999")
							}
						}
					}
				}
			},
			"fileuploaditembutton" :
			{
				"parent" :
				{
					"fileuploaditem" :
					{
						"parent" :
						{
							"FileUpload" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("1px solid #c2c2c2"),
										"padding" : nexacro.PaddingObject("1px 9px 0px 9px")
									},
									"mouseover" :
									{
										"border" : nexacro.BorderObject("1px solid #a0a0a0")
									},
									"focused" :
									{
										"border" : nexacro.BorderObject("1px solid #a0a0a0")
									},
									"pushed" :
									{
									},
									"selected" :
									{
									},
									"disabled" :
									{
										"color" : nexacro.ColorObject("#bbbbbb"),
										"border" : nexacro.BorderObject("1px solid #d9d9d9")
									}
								}
							}
						}
					}
				}
			},
			"Calendar" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"readonly" :
					{
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#999999")
					},
					"invalidtext" :
					{
						"color" : nexacro.ColorObject("#999999")
					}
				},
				"class" :
				[
					{
						"cal_default" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #0d6efd")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("1px solid #0d6efd")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("1px solid #0d6efd")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("1px solid #0d6efd")
								},
								"readonly" :
								{
									"border" : nexacro.BorderObject("1px solid #0d6efd")
								},
								"invalidtext" :
								{
									"border" : nexacro.BorderObject("1px solid #0d6efd")
								}
							}
						}
					}
				]
			},
			"CalendarControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"readonly" :
					{
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#999999")
					},
					"invalidtext" :
					{
						"color" : nexacro.ColorObject("#999999")
					}
				}
			},
			"dropbutton" :
			{
				"parent" :
				{
					"Calendar" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calendar.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calendar_D.png')")
							}
						},
						"class" :
						[
							{
								"cal_default" :
								{
									"self" :
									{
										"disabled_pushed" :
										{
											"icon" : nexacro.UrlObject("url('theme://images/btn_Cal_N.png')")
										},
										"disabled_selected" :
										{
											"icon" : nexacro.UrlObject("url('theme://images/btn_Cal_N.png')")
										},
										"enabled" :
										{
											"icon" : nexacro.UrlObject("url('theme://images/btn_Cal_N.png')")
										}
									}
								}
							}
						]
					},
					"CalendarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calendar.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calendar_D.png')")
							}
						}
					},
					"Combo" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("1px 2px 0px 0px"),
								"icon" : nexacro.UrlObject("URL('theme://images/cmb_WF_Drop.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/cmb_WF_Drop_O.png')")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/cmb_WF_Drop_O.png')")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/cmb_WF_Drop_P.png')")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/cmb_WF_Drop_P.png')")
							},
							"disabled" :
							{
							}
						},
						"class" :
						[
							{
								"cmb_default" :
								{
									"self" :
									{
										"enabled" :
										{
											"icon" : nexacro.UrlObject("url('theme://images/cmb_WF_Drop_O.png')")
										}
									}
								}
							}
						]
					},
					"ComboControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("1px 2px 0px 0px"),
								"icon" : nexacro.UrlObject("URL('theme://images/cmb_WF_Drop.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/cmb_WF_Drop_O.png')")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/cmb_WF_Drop_O.png')")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/cmb_WF_Drop_P.png')")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/cmb_WF_Drop_P.png')")
							},
							"disabled" :
							{
							}
						}
					}
				}
			},
			"calendarspinupbutton" :
			{
				"parent" :
				{
					"Calendar" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spinup.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spinup_O.png')")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spinup_P.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spinup_D.png')")
							}
						}
					},
					"CalendarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spinup.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spinup_O.png')")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spinup_P.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spinup_D.png')")
							}
						}
					}
				}
			},
			"calendarspindownbutton" :
			{
				"parent" :
				{
					"Calendar" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spindown.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spindown_O.png')")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spindown_P.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spindown_D.png')")
							}
						}
					},
					"CalendarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spindown.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spindown_O.png')")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spindown_P.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spindown_D.png')")
							}
						}
					}
				}
			},
			"CheckBox" :
			{
				"self" :
				{
					"enabled" :
					{
						"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_Box.png')"),
						"textPadding" : nexacro.PaddingObject("0px 0px 0px 6px")
					},
					"mouseover" :
					{
						"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_Box_O.png')")
					},
					"readonly" :
					{
						"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_Box_D.png')")
					},
					"selected" :
					{
						"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_Box_S.png')")
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#999999"),
						"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_Box_D.png')")
					},
					"disabled_selected" :
					{
						"color" : nexacro.ColorObject("#999999"),
						"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_Box_DS.png')")
					}
				}
			},
			"CheckBoxControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_Box.png')"),
						"textPadding" : nexacro.PaddingObject("0px 0px 0px 6px")
					},
					"mouseover" :
					{
						"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_Box_O.png')")
					},
					"readonly" :
					{
						"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_Box_D.png')")
					},
					"selected" :
					{
						"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_Box_S.png')")
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#999999"),
						"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_Box_D.png')")
					},
					"disabled_selected" :
					{
						"color" : nexacro.ColorObject("#999999"),
						"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_Box_DS.png')")
					}
				}
			},
			"Combo" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"readonly" :
					{
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#999999")
					}
				},
				"class" :
				[
					{
						"cmb_dept" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #0d6efd"),
									"color" : nexacro.ColorObject("#0d6efd"),
									"font" : nexacro.FontObject("12px \"-윤고딕330\"")
								}
							}
						}
					},
					{
						"cmb_default" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #0d6efd")
								},
								"readonly" :
								{
									"border" : nexacro.BorderObject("1px solid #0d6efd"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"color" : nexacro.ColorObject("#0d6efd")
								}
							}
						}
					}
				]
			},
			"ComboControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"readonly" :
					{
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#999999")
					}
				}
			},
			"combolist" :
			{
				"parent" :
				{
					"Combo" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("12px Gulim"),
								"color" : nexacro.ColorObject("#555555"),
								"border" : nexacro.BorderObject("1px solid #b1b1b1")
							}
						}
					},
					"ComboControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("12px Gulim"),
								"color" : nexacro.ColorObject("#555555"),
								"border" : nexacro.BorderObject("1px solid #b1b1b1")
							}
						}
					},
					"cellcombo" :
					{
						"parent" :
						{
							"GridCellControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"font" : nexacro.FontObject("12px Gulim"),
										"color" : nexacro.ColorObject("#555555")
									}
								}
							},
							"ListViewCellControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"font" : nexacro.FontObject("12px Gulim"),
										"color" : nexacro.ColorObject("#555555")
									}
								}
							}
						}
					}
				}
			},
			"Edit" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5"),
						"padding" : nexacro.PaddingObject("1px 9px 0px 9px")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"readonly" :
					{
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#999999")
					},
					"nulltext" :
					{
						"color" : nexacro.ColorObject("#999999")
					}
				},
				"class" :
				[
					{
						"edt_default" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #0d6efd"),
									"color" : nexacro.ColorObject("#0d6efd"),
									"font" : nexacro.FontObject("12px \"-윤고딕330\"")
								}
							}
						}
					}
				]
			},
			"fileuploaditemedit" :
			{
				"parent" :
				{
					"fileuploaditem" :
					{
						"parent" :
						{
							"FileUpload" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("1px solid #d5d5d5"),
										"padding" : nexacro.PaddingObject("1px 9px 0px 9px")
									},
									"mouseover" :
									{
										"border" : nexacro.BorderObject("1px solid #5a86cd")
									},
									"focused" :
									{
										"border" : nexacro.BorderObject("1px solid #5a86cd")
									},
									"disabled" :
									{
										"color" : nexacro.ColorObject("#999999")
									}
								}
							}
						}
					}
				}
			},
			"EditControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("0px none"),
						"padding" : nexacro.PaddingObject("1px 9px 0px 9px")
					},
					"nulltext" :
					{
						"color" : nexacro.ColorObject("#999999")
					}
				}
			},
			"MaskEdit" :
			{
				"self" :
				{
					"nulltext" :
					{
						"color" : nexacro.ColorObject("#999999")
					},
					"invalidtext" :
					{
						"color" : nexacro.ColorObject("#999999")
					},
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5"),
						"padding" : nexacro.PaddingObject("1px 9px 0px 9px")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"readonly" :
					{
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#999999")
					}
				},
				"class" :
				[
					{
						"med_default" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#0d6efd"),
									"border" : nexacro.BorderObject("1px solid #0d6efd"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
								},
								"disabled" :
								{
									"color" : nexacro.ColorObject("#0d6efd"),
									"border" : nexacro.BorderObject("1px solid #0d6efd"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
								},
								"mouseover" :
								{
									"color" : nexacro.ColorObject("#0d6efd"),
									"border" : nexacro.BorderObject("1px solid #0d6efd"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
								},
								"focused" :
								{
									"color" : nexacro.ColorObject("#0d6efd"),
									"border" : nexacro.BorderObject("1px solid #0d6efd"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
								},
								"readonly" :
								{
									"color" : nexacro.ColorObject("#0d6efd"),
									"border" : nexacro.BorderObject("1px solid #0d6efd"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
								},
								"nulltext" :
								{
									"color" : nexacro.ColorObject("#0d6efd"),
									"border" : nexacro.BorderObject("1px solid #0d6efd"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
								},
								"invalidtext" :
								{
									"color" : nexacro.ColorObject("#0d6efd"),
									"border" : nexacro.BorderObject("1px solid #0d6efd"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
								}
							}
						}
					}
				]
			},
			"MaskEditControl" :
			{
				"self" :
				{
					"nulltext" :
					{
						"color" : nexacro.ColorObject("#999999")
					},
					"invalidtext" :
					{
						"color" : nexacro.ColorObject("#999999")
					},
					"enabled" :
					{
						"border" : nexacro.BorderObject("0px none"),
						"padding" : nexacro.PaddingObject("1px 9px 0px 9px")
					}
				}
			},
			"TextArea" :
			{
				"self" :
				{
					"nulltext" :
					{
						"color" : nexacro.ColorObject("#999999")
					},
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5"),
						"padding" : nexacro.PaddingObject("9px 9px 9px 9px")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"readonly" :
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5")
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#999999")
					}
				},
				"class" :
				[
					{
						"txt_default" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #0d6efd"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"color" : nexacro.ColorObject("#383838")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("1px solid #0d6efd"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"color" : nexacro.ColorObject("#383838")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("1px solid #0d6efd"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"color" : nexacro.ColorObject("#383838")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("1px solid #0d6efd"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"color" : nexacro.ColorObject("#383838")
								},
								"readonly" :
								{
									"border" : nexacro.BorderObject("1px solid #0d6efd"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"color" : nexacro.ColorObject("#383838")
								},
								"nulltext" :
								{
									"border" : nexacro.BorderObject("1px solid #0d6efd"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
									"color" : nexacro.ColorObject("#383838")
								}
							}
						}
					}
				]
			},
			"TextAreaControl" :
			{
				"self" :
				{
					"nulltext" :
					{
						"color" : nexacro.ColorObject("#999999")
					},
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5"),
						"padding" : nexacro.PaddingObject("9px 9px 9px 9px")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"readonly" :
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5")
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#999999")
					}
				}
			},
			"Spin" :
			{
				"self" :
				{
					"invalidtext" :
					{
						"color" : nexacro.ColorObject("#999999")
					},
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"readonly" :
					{
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#999999")
					}
				}
			},
			"SpinControl" :
			{
				"self" :
				{
					"invalidtext" :
					{
						"color" : nexacro.ColorObject("#999999")
					}
				}
			},
			"Grid" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("2px solid #125dae, 1px solid #b7b1b2, 1px solid #b7b1b2, 1px solid #b7b1b2")
					}
				}
			},
			"cell" :
			{
				"parent" :
				{
					"row" :
					{
						"parent" :
						{
							"head" :
							{
								"parent" :
								{
									"Grid" :
									{
										"self" :
										{
											"enabled" :
											{
												"font" : nexacro.FontObject("bold 12px Gulim"),
												"color" : nexacro.ColorObject("#2f2f2f"),
												"border" : nexacro.BorderObject("1px solid #cacaca"),
												"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
											},
											"disabled" :
											{
												"color" : nexacro.ColorObject("#999999")
											}
										},
										"class" :
										[
											{
												"grd_default" :
												{
													"self" :
													{
														"enabled" :
														{
															"font" : nexacro.FontObject("bold 12px/normal \"Malgun Gothic\""),
															"color" : nexacro.ColorObject("#ffffff")
														},
														"focused" :
														{
															"font" : nexacro.FontObject("bold 12px/normal \"Malgun Gothic\""),
															"color" : nexacro.ColorObject("#ffffff")
														},
														"mouseover_selected" :
														{
															"font" : nexacro.FontObject("bold 12px/normal \"Malgun Gothic\""),
															"color" : nexacro.ColorObject("#ffffff")
														},
														"disabled" :
														{
															"font" : nexacro.FontObject("bold 12px/normal \"Malgun Gothic\""),
															"color" : nexacro.ColorObject("#ffffff")
														},
														"selected" :
														{
															"font" : nexacro.FontObject("bold 12px/normal \"Malgun Gothic\""),
															"color" : nexacro.ColorObject("#ffffff")
														}
													}
												}
											}
										]
									}
								}
							},
							"body" :
							{
								"parent" :
								{
									"Grid" :
									{
										"self" :
										{
											"disabled_selected" :
											{
											},
											"enabled" :
											{
												"color" : nexacro.ColorObject("#666666"),
												"border" : nexacro.BorderObject("1px solid #dbdee2"),
												"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
											},
											"mouseover" :
											{
											},
											"selected" :
											{
											},
											"disabled" :
											{
												"color" : nexacro.ColorObject("#999999")
											},
											"blinked" :
											{
												"color" : nexacro.ColorObject("#ffffff")
											}
										},
										"class" :
										[
											{
												"grd_default" :
												{
													"self" :
													{
														"disabled" :
														{
															"font" : nexacro.FontObject("12px/normal \"Malgun Gothic\""),
															"color" : nexacro.ColorObject("#444444")
														},
														"focused" :
														{
															"font" : nexacro.FontObject("12px/normal \"Malgun Gothic\""),
															"color" : nexacro.ColorObject("#444444")
														},
														"readonly" :
														{
															"font" : nexacro.FontObject("12px/normal \"Malgun Gothic\""),
															"color" : nexacro.ColorObject("#444444")
														},
														"mouseover" :
														{
															"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\""),
															"color" : nexacro.ColorObject("#1c0c7c")
														},
														"mouseover_selected" :
														{
															"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\""),
															"color" : nexacro.ColorObject("#1c0c7c")
														}
													}
												}
											}
										]
									}
								}
							},
							"summary" :
							{
								"parent" :
								{
									"Grid" :
									{
										"self" :
										{
											"enabled" :
											{
												"font" : nexacro.FontObject("bold 12px Gulim"),
												"color" : nexacro.ColorObject("#333333"),
												"border" : nexacro.BorderObject("1px solid #c8c1c2")
											}
										}
									}
								}
							}
						}
					},
					"body" :
					{
						"parent" :
						{
							"ListView" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("1px solid #dbdee2"),
										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
									},
									"disabled" :
									{
										"border" : nexacro.BorderObject("1px solid #dbdee2"),
										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
									},
									"readonly" :
									{
										"border" : nexacro.BorderObject("1px solid #dbdee2"),
										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
									},
									"focused" :
									{
										"border" : nexacro.BorderObject("1px solid #dbdee2"),
										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
									},
									"mouseover" :
									{
										"border" : nexacro.BorderObject("1px solid #c4c9cf")
									}
								}
							}
						}
					},
					"detail" :
					{
						"parent" :
						{
							"ListView" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("1px solid #dbdee2"),
										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
									},
									"disabled" :
									{
										"border" : nexacro.BorderObject("1px solid #dbdee2"),
										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
									},
									"readonly" :
									{
										"border" : nexacro.BorderObject("1px solid #dbdee2"),
										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
									},
									"focused" :
									{
										"border" : nexacro.BorderObject("1px solid #dbdee2"),
										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
									},
									"mouseover" :
									{
										"border" : nexacro.BorderObject("1px solid #c4c9cf")
									}
								}
							}
						}
					}
				}
			},
			"subcell" :
			{
				"parent" :
				{
					"cell" :
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
														"color" : nexacro.ColorObject("#666666"),
														"border" : nexacro.BorderObject("1px solid #dbdee2"),
														"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
													},
													"mouseover" :
													{
													},
													"disabled" :
													{
														"color" : nexacro.ColorObject("#999999")
													},
													"selected" :
													{
													},
													"blinked" :
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
				}
			},
			"selection" :
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
										"border" : nexacro.BorderObject("2px solid #125dae")
									}
								}
							}
						}
					}
				}
			},
			"summary" :
			{
				"parent" :
				{
					"Grid" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #c8c1c2, 0px none, 0px none, 0px none")
							}
						}
					}
				}
			},
			"hscrollbar" :
			{
				"parent" :
				{
					"Grid" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #b1b1b1, 0px none, 0px none, 0px none")
							}
						}
					}
				}
			},
			"vscrollbar" :
			{
				"parent" :
				{
					"Grid" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 0px none, 1px solid #b1b1b1")
							}
						}
					}
				}
			},
			"cellbutton" :
			{
				"parent" :
				{
					"GridCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("12px/normal \"Malgun Gothic\""),
								"color" : nexacro.ColorObject("#555555"),
								"border" : nexacro.BorderObject("1px solid #c2c2c2")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #a0a0a0")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #a0a0a0")
							},
							"pushed" :
							{
							},
							"selected" :
							{
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#bbbbbb"),
								"border" : nexacro.BorderObject("1px solid #d9d9d9")
							}
						}
					},
					"ListViewCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("12px Gulim"),
								"color" : nexacro.ColorObject("#555555"),
								"border" : nexacro.BorderObject("1px solid #c2c2c2")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #a0a0a0")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #a0a0a0")
							},
							"pushed" :
							{
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#bbbbbb"),
								"border" : nexacro.BorderObject("1px solid #d9d9d9")
							}
						}
					}
				}
			},
			"cellcalendar" :
			{
				"parent" :
				{
					"GridCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("12px Gulim")
							}
						}
					},
					"ListViewCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("12px Gulim")
							}
						}
					}
				}
			},
			"cellcheckbox" :
			{
				"parent" :
				{
					"GridCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("12px Gulim")
							}
						}
					},
					"ListViewCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("12px Gulim")
							}
						}
					}
				}
			},
			"cellcombo" :
			{
				"parent" :
				{
					"GridCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("12px Gulim")
							}
						}
					},
					"ListViewCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("12px Gulim")
							}
						}
					}
				}
			},
			"listboxitem" :
			{
				"parent" :
				{
					"combolist" :
					{
						"parent" :
						{
							"cellcombo" :
							{
								"parent" :
								{
									"GridCellControl" :
									{
										"self" :
										{
											"mouseover" :
											{
											}
										}
									},
									"ListViewCellControl" :
									{
										"self" :
										{
											"mouseover" :
											{
											}
										}
									}
								}
							},
							"Combo" :
							{
								"class" :
								[
									{
										"cmb_default" :
										{
											"self" :
											{
												"mouseover" :
												{
													"color" : nexacro.ColorObject("#ffffff"),
													"font" : nexacro.FontObject("12px \"-윤고딕330\"")
												},
												"enabled" :
												{
													"color" : nexacro.ColorObject("#1c0c7c"),
													"font" : nexacro.FontObject("12px \"-윤고딕330\"")
												}
											}
										}
									}
								]
							}
						}
					},
					"ListBox" :
					{
						"self" :
						{
							"enabled" :
							{
								"color" : nexacro.ColorObject("#555555"),
								"padding" : nexacro.PaddingObject("2px 9px 3px 9px")
							},
							"mouseover" :
							{
							},
							"selected" :
							{
								"color" : nexacro.ColorObject("#ffffff")
							},
							"disabled" :
							{
							}
						}
					},
					"ListBoxControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"color" : nexacro.ColorObject("#555555"),
								"padding" : nexacro.PaddingObject("2px 9px 3px 9px")
							},
							"mouseover" :
							{
							},
							"selected" :
							{
								"color" : nexacro.ColorObject("#ffffff")
							},
							"disabled" :
							{
							}
						}
					}
				}
			},
			"celledit" :
			{
				"parent" :
				{
					"GridCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("12px Gulim"),
								"border" : nexacro.BorderObject("1px solid #d5d5d5"),
								"padding" : nexacro.PaddingObject("1px 9px 0px 9px")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #5a86cd")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #5a86cd")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#999999")
							}
						}
					},
					"ListViewCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("12px Gulim"),
								"border" : nexacro.BorderObject("1px solid #d5d5d5"),
								"padding" : nexacro.PaddingObject("1px 9px 0px 9px")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #5a86cd")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #5a86cd")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#999999")
							}
						}
					}
				}
			},
			"cellexpandbutton" :
			{
				"parent" :
				{
					"GridCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Grdexpand.png')")
							}
						}
					},
					"ListViewCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Grdexpand.png')")
							}
						}
					}
				}
			},
			"cellmaskedit" :
			{
				"parent" :
				{
					"GridCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("12px Gulim"),
								"border" : nexacro.BorderObject("1px solid #d5d5d5"),
								"padding" : nexacro.PaddingObject("1px 9px 0px 9px")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #5a86cd")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #5a86cd")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#999999")
							}
						}
					},
					"ListViewCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("12px Gulim"),
								"border" : nexacro.BorderObject("1px solid #d5d5d5"),
								"padding" : nexacro.PaddingObject("1px 9px 0px 9px")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #5a86cd")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #5a86cd")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#999999")
							}
						}
					}
				}
			},
			"cellprogressbar" :
			{
				"parent" :
				{
					"GridCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("12px Gulim")
							}
						}
					},
					"ListViewCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("12px Gulim")
							}
						}
					}
				}
			},
			"celltextarea" :
			{
				"parent" :
				{
					"GridCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("12px Gulim")
							}
						}
					},
					"ListViewCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("12px Gulim")
							}
						}
					}
				}
			},
			"treeitemtext" :
			{
				"parent" :
				{
					"celltreeitem" :
					{
						"parent" :
						{
							"GridCellControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"color" : nexacro.ColorObject("#3d3d3d"),
										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
									},
									"disabled" :
									{
										"color" : nexacro.ColorObject("#3d3d3d"),
										"font" : nexacro.FontObject("12px/normal Malgun Gothic")
									}
								}
							}
						}
					}
				}
			},
			"treeitembutton" :
			{
				"parent" :
				{
					"celltreeitem" :
					{
						"parent" :
						{
							"GridCellControl" :
							{
								"self" :
								{
									"expand" :
									{
										"icon" : nexacro.UrlObject("url('theme://images/btn_tree_col.png')")
									},
									"collapse" :
									{
										"icon" : nexacro.UrlObject("url('theme://images/btn_tree_ce.png')")
									}
								}
							}
						}
					}
				}
			},
			"treeitemimage" :
			{
				"parent" :
				{
					"celltreeitem" :
					{
						"parent" :
						{
							"GridCellControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/img_WF_Treeitem.png')")
									},
									"expand" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/img_WF_Treeexpand.png')")
									},
									"collapse" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/img_WF_Treecollapse.png')")
									}
								}
							}
						}
					}
				}
			},
			"celltreeline" :
			{
				"parent" :
				{
					"GridCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px dotted #909090")
							}
						}
					}
				}
			},
			"groupboxcontents" :
			{
				"parent" :
				{
					"GroupBox" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #d6d4d5")
							},
							"disabled" :
							{
							}
						}
					}
				}
			},
			"groupboxtitle" :
			{
				"parent" :
				{
					"GroupBox" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("0px 4px 0px 4px")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#999999")
							}
						}
					}
				}
			},
			"ImageViewer" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5")
					},
					"disabled" :
					{
					}
				}
			},
			"imagetext" :
			{
				"parent" :
				{
					"ImageViewer" :
					{
						"self" :
						{
							"disabled" :
							{
								"color" : nexacro.ColorObject("#999999")
							}
						}
					}
				}
			},
			"ListBox" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"disabled" :
					{
					}
				}
			},
			"ListBoxControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"disabled" :
					{
					}
				}
			},
			"Menu" :
			{
				"self" :
				{
					"enabled" :
					{
						"font" : nexacro.FontObject("14px/normal \"Malgun Gothic\"")
					},
					"disabled" :
					{
						"font" : nexacro.FontObject("14px/normal \"Malgun Gothic\"")
					}
				}
			},
			"prevbutton" :
			{
				"parent" :
				{
					"Menu" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("0px 5px 0px 15px"),
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Menuprev.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Menuprev_O.png')")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Menuprev_O.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Menuprev_D.png')")
							}
						}
					},
					"menupopupmenu" :
					{
						"parent" :
						{
							"Menu" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenuprev.png')")
									},
									"mouseover" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenuprev_O.png')")
									},
									"disabled" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenuprev_D.png')")
									}
								}
							}
						}
					},
					"PopupMenu" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenuprev2.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenuprev2_O.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenuprev2_D.png')")
							}
						}
					},
					"PopupMenuControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenuprev2.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenuprev2_O.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenuprev2_D.png')")
							}
						}
					},
					"Tab" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("0px 8px 10px 0px"),
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Tabprev.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Tabprev_O.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Tabprev_D.png')")
							}
						}
					},
					"head" :
					{
						"parent" :
						{
							"DatePickerControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calprev.png')")
									},
									"mouseover" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calprev_O.png')")
									},
									"pushed" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calprev_O.png')")
									},
									"disabled" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calprev.png')")
									}
								}
							}
						}
					}
				}
			},
			"nextbutton" :
			{
				"parent" :
				{
					"Menu" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("0px 15px 0px 5px"),
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Menunext.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Menunext_O.png')")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Menunext_O.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Menunext_D.png')")
							}
						}
					},
					"menupopupmenu" :
					{
						"parent" :
						{
							"Menu" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenunext.png')")
									},
									"mouseover" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenunext_O.png')")
									},
									"disabled" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenunext_D.png')")
									}
								}
							}
						}
					},
					"PopupMenu" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenunext2.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenunext2_O.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenunext2_D.png')")
							}
						}
					},
					"PopupMenuControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenunext2.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenunext2_O.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenunext2_D.png')")
							}
						}
					},
					"Tab" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("0px 0px 10px 8px"),
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Tabnext.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Tabnext_O.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Tabnext_D.png')")
							}
						}
					},
					"head" :
					{
						"parent" :
						{
							"DatePickerControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"padding" : nexacro.PaddingObject("0px 10px 0px 0px"),
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calnext.png')")
									},
									"mouseover" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calnext_O.png')")
									},
									"pushed" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calnext_O.png')")
									},
									"disabled" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calnext.png')")
									}
								}
							}
						}
					}
				}
			},
			"menuitem" :
			{
				"parent" :
				{
					"Menu" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("14px/normal \"Malgun Gothic\""),
								"color" : nexacro.ColorObject("#ffffff"),
								"padding" : nexacro.PaddingObject("0px 15px 0px 15px")
							},
							"disabled" :
							{
								"font" : nexacro.FontObject("14px/normal \"Malgun Gothic\""),
								"color" : nexacro.ColorObject("#c7d4e2")
							},
							"mouseover" :
							{
								"color" : nexacro.ColorObject("#ffffff"),
								"font" : nexacro.FontObject("bold 14px/normal \"Malgun Gothic\"")
							},
							"selected" :
							{
							}
						}
					}
				}
			},
			"menupopupmenu" :
			{
				"parent" :
				{
					"Menu" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("12px Gulim"),
								"color" : nexacro.ColorObject("#555555"),
								"border" : nexacro.BorderObject("1px solid #034389")
							}
						}
					}
				}
			},
			"popupmenuitem" :
			{
				"parent" :
				{
					"menupopupmenu" :
					{
						"parent" :
						{
							"Menu" :
							{
								"self" :
								{
									"enabled" :
									{
										"color" : nexacro.ColorObject("#c3e0ff"),
										"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #2065ae, 0px none"),
										"padding" : nexacro.PaddingObject("3px 8px 3px 8px")
									},
									"mouseover" :
									{
										"color" : nexacro.ColorObject("#ffffff")
									},
									"focused" :
									{
										"color" : nexacro.ColorObject("#ffffff")
									},
									"selected" :
									{
										"color" : nexacro.ColorObject("#ffffff")
									},
									"disabled" :
									{
										"color" : nexacro.ColorObject("#2665af")
									}
								}
							}
						}
					},
					"PopupMenu" :
					{
						"self" :
						{
							"enabled" :
							{
								"color" : nexacro.ColorObject("#555555"),
								"padding" : nexacro.PaddingObject("3px 9px 3px 9px")
							},
							"selected" :
							{
								"color" : nexacro.ColorObject("#ffffff")
							},
							"mouseover" :
							{
							},
							"focused" :
							{
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#999999")
							}
						}
					},
					"PopupMenuControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"color" : nexacro.ColorObject("#555555"),
								"padding" : nexacro.PaddingObject("3px 9px 3px 9px")
							},
							"selected" :
							{
								"color" : nexacro.ColorObject("#ffffff")
							},
							"mouseover" :
							{
							},
							"focused" :
							{
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#999999")
							}
						}
					}
				}
			},
			"popupmenuitemcheckbox" :
			{
				"parent" :
				{
					"popupmenuitem" :
					{
						"parent" :
						{
							"menupopupmenu" :
							{
								"parent" :
								{
									"Menu" :
									{
										"self" :
										{
											"enabled" :
											{
												"padding" : nexacro.PaddingObject("0px 7px 0px 0px"),
												"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_Popupmenu_O.png')")
											},
											"mouseover" :
											{
												"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_Popupmenu_O.png')")
											}
										}
									}
								}
							},
							"PopupMenu" :
							{
								"self" :
								{
									"mouseover" :
									{
									},
									"disabled" :
									{
									}
								}
							},
							"PopupMenuControl" :
							{
								"self" :
								{
									"mouseover" :
									{
									},
									"disabled" :
									{
									}
								}
							}
						}
					}
				}
			},
			"popupmenuitemtext" :
			{
				"parent" :
				{
					"popupmenuitem" :
					{
						"parent" :
						{
							"menupopupmenu" :
							{
								"parent" :
								{
									"Menu" :
									{
										"self" :
										{
											"enabled" :
											{
												"color" : nexacro.ColorObject("#c3e0ff"),
												"padding" : nexacro.PaddingObject("0px 20px 0px 0px")
											},
											"mouseover" :
											{
												"color" : nexacro.ColorObject("#ffffff")
											},
											"disabled" :
											{
												"color" : nexacro.ColorObject("#2665af")
											}
										}
									}
								}
							},
							"PopupMenu" :
							{
								"self" :
								{
									"enabled" :
									{
										"padding" : nexacro.PaddingObject("2px 10px 1px 4px")
									}
								}
							},
							"PopupMenuControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"padding" : nexacro.PaddingObject("2px 10px 1px 4px")
									}
								}
							}
						}
					}
				}
			},
			"popupmenuitemhotkeytext" :
			{
				"parent" :
				{
					"popupmenuitem" :
					{
						"parent" :
						{
							"menupopupmenu" :
							{
								"parent" :
								{
									"Menu" :
									{
										"self" :
										{
											"enabled" :
											{
												"color" : nexacro.ColorObject("#6d95cc"),
												"padding" : nexacro.PaddingObject("0px 7px 0px 0px")
											},
											"mouseover" :
											{
												"color" : nexacro.ColorObject("#ffffff")
											},
											"disabled" :
											{
												"color" : nexacro.ColorObject("#4577b9")
											}
										}
									}
								}
							},
							"PopupMenu" :
							{
								"self" :
								{
									"enabled" :
									{
										"color" : nexacro.ColorObject("#aaaaaa"),
										"padding" : nexacro.PaddingObject("0px 7px 0px 0px")
									},
									"disabled" :
									{
										"color" : nexacro.ColorObject("#4577b9")
									}
								}
							},
							"PopupMenuControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"color" : nexacro.ColorObject("#aaaaaa"),
										"padding" : nexacro.PaddingObject("0px 7px 0px 0px")
									},
									"disabled" :
									{
										"color" : nexacro.ColorObject("#4577b9")
									}
								}
							}
						}
					}
				}
			},
			"popupmenuitemexpandimage" :
			{
				"parent" :
				{
					"popupmenuitem" :
					{
						"parent" :
						{
							"menupopupmenu" :
							{
								"parent" :
								{
									"Menu" :
									{
										"self" :
										{
											"enabled" :
											{
												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popupexpand2.png')")
											}
										}
									}
								}
							},
							"PopupMenu" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popupexpand2.png')")
									}
								}
							},
							"PopupMenuControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popupexpand2.png')")
									}
								}
							}
						}
					}
				}
			},
			"Plugin" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5")
					}
				}
			},
			"PluginControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5")
					}
				}
			},
			"PopupMenu" :
			{
				"self" :
				{
					"enabled" :
					{
						"font" : nexacro.FontObject("12px Gulim"),
						"color" : nexacro.ColorObject("#555555"),
						"border" : nexacro.BorderObject("1px solid #b5b5b5")
					}
				}
			},
			"PopupMenuControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"font" : nexacro.FontObject("12px Gulim"),
						"color" : nexacro.ColorObject("#555555"),
						"border" : nexacro.BorderObject("1px solid #b5b5b5")
					}
				}
			},
			"ProgressBar" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #aeaeae, 1px solid #d2d0d1, 1px solid #d2d0d1, 1px solid #d2d0d1")
					}
				}
			},
			"ProgressBarControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #aeaeae, 1px solid #d2d0d1, 1px solid #d2d0d1, 1px solid #d2d0d1")
					}
				}
			},
			"progressbaritem" :
			{
				"parent" :
				{
					"ProgressBar" :
					{
						"self" :
						{
							"disabled" :
							{
							}
						}
					},
					"ProgressBarControl" :
					{
						"self" :
						{
							"disabled" :
							{
							}
						}
					}
				}
			},
			"progressbartext" :
			{
				"parent" :
				{
					"ProgressBar" :
					{
						"self" :
						{
							"enabled" :
							{
								"color" : nexacro.ColorObject("#ffffff")
							}
						}
					},
					"ProgressBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"color" : nexacro.ColorObject("#ffffff")
							}
						}
					}
				}
			},
			"radioitem" :
			{
				"parent" :
				{
					"Radio" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/rdo_WF_Radio.png')"),
								"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
								"color" : nexacro.ColorObject("#0d6efd")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/rdo_WF_Radio_S.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/rdo_WF_Radio_O.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/rdo_WF_Radio_D.png')")
							},
							"disabled_selected" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/rdo_WF_Radio_DS.png')")
							}
						}
					}
				}
			},
			"Sketch" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5")
					},
					"disabled" :
					{
					}
				}
			},
			"spinedit" :
			{
				"parent" :
				{
					"Spin" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
							},
							"disabled" :
							{
								"padding" : nexacro.PaddingObject("1px 2px 0px 9px")
							}
						}
					},
					"yearspin" :
					{
						"parent" :
						{
							"head" :
							{
								"parent" :
								{
									"DatePickerControl" :
									{
										"self" :
										{
											"enabled" :
											{
												"font" : nexacro.FontObject("bold 14px Tahoma"),
												"color" : nexacro.ColorObject("#ffffff")
											}
										}
									}
								}
							}
						}
					},
					"monthspin" :
					{
						"parent" :
						{
							"head" :
							{
								"parent" :
								{
									"DatePickerControl" :
									{
										"self" :
										{
											"enabled" :
											{
												"font" : nexacro.FontObject("bold 14px Tahoma"),
												"color" : nexacro.ColorObject("#ffffff")
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"spinupbutton" :
			{
				"parent" :
				{
					"Spin" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("1px 0px 0px 0px"),
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spinup.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spinup_O.png')")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spinup_P.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spinup_D.png')")
							}
						}
					},
					"yearspin" :
					{
						"parent" :
						{
							"head" :
							{
								"parent" :
								{
									"DatePickerControl" :
									{
										"self" :
										{
											"enabled" :
											{
												"padding" : nexacro.PaddingObject("0px 10px 0px 5px"),
												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspinup.png')")
											},
											"mouseover" :
											{
												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspinup_O.png')")
											},
											"pushed" :
											{
												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspinup_O.png')")
											},
											"disabled" :
											{
												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspinup_D.png')")
											}
										}
									}
								}
							}
						}
					},
					"monthspin" :
					{
						"parent" :
						{
							"head" :
							{
								"parent" :
								{
									"DatePickerControl" :
									{
										"self" :
										{
											"enabled" :
											{
												"padding" : nexacro.PaddingObject("0px 10px 0px 5px"),
												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspinup.png')")
											},
											"mouseover" :
											{
												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspinup_O.png')")
											},
											"pushed" :
											{
												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspinup_O.png')")
											},
											"disabled" :
											{
												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspinup_D.png')")
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"spindownbutton" :
			{
				"parent" :
				{
					"Spin" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("0px 0px 2px 0px"),
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spindown.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spindown_O.png')")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spindown_P.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spindown_D.png')")
							}
						}
					},
					"yearspin" :
					{
						"parent" :
						{
							"head" :
							{
								"parent" :
								{
									"DatePickerControl" :
									{
										"self" :
										{
											"enabled" :
											{
												"padding" : nexacro.PaddingObject("0px 10px 0px 5px"),
												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspindown.png')")
											},
											"mouseover" :
											{
												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspindown_O.png')")
											},
											"pushed" :
											{
												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspindown_O.png')")
											},
											"disabled" :
											{
												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspindown_D.png')")
											}
										}
									}
								}
							}
						}
					},
					"monthspin" :
					{
						"parent" :
						{
							"head" :
							{
								"parent" :
								{
									"DatePickerControl" :
									{
										"self" :
										{
											"enabled" :
											{
												"padding" : nexacro.PaddingObject("0px 10px 0px 5px"),
												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspindown.png')")
											},
											"mouseover" :
											{
												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspindown_O.png')")
											},
											"pushed" :
											{
												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspindown_O.png')")
											},
											"disabled" :
											{
												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspindown_D.png')")
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"Static" :
			{
				"self" :
				{
					"enabled" :
					{
						"font" : nexacro.FontObject("12px/normal \"Malgun Gothic\"")
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#999999")
					}
				},
				"class" :
				[
					{
						"sta_default" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("12px/normal \"Malgun Gothic\"")
								}
							}
						}
					},
					{
						"sta_title" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#0d6efd"),
									"font" : nexacro.FontObject("bold 14px/normal \"Malgun Gothic\"")
								}
							}
						}
					},
					{
						"sta_line" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #0d6efd")
								}
							}
						}
					}
				]
			},
			"StaticControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"font" : nexacro.FontObject("12px/normal \"Malgun Gothic\"")
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#999999")
					}
				}
			},
			"WebBrowser" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5")
					}
				}
			},
			"WebBrowserControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5")
					}
				}
			},
			"tabpage" :
			{
				"parent" :
				{
					"Tab" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #cfcfcf, 0px none, 0px none, 0px none")
							}
						}
					}
				}
			},
			"tabbuttonitem" :
			{
				"parent" :
				{
					"Tab" :
					{
						"self" :
						{
							"enabled" :
							{
								"color" : nexacro.ColorObject("#ffffff"),
								"border" : nexacro.BorderObject("1px solid #c7c7c7"),
								"padding" : nexacro.PaddingObject("6px 10px 6px 10px"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
							},
							"mouseover" :
							{
								"color" : nexacro.ColorObject("#282828"),
								"border" : nexacro.BorderObject("1px solid #c7c7c7"),
								"padding" : nexacro.PaddingObject("6px 10px 6px 10px"),
								"font" : nexacro.FontObject("bold 12px/normal \"Malgun Gothic\"")
							},
							"focused" :
							{
								"color" : nexacro.ColorObject("#ffffff"),
								"border" : nexacro.BorderObject("1px solid #c7c7c7"),
								"padding" : nexacro.PaddingObject("6px 10px 6px 10px"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
							},
							"selected" :
							{
								"color" : nexacro.ColorObject("#282828"),
								"border" : nexacro.BorderObject("1px solid #c7c7c7"),
								"padding" : nexacro.PaddingObject("6px 10px 6px 10px"),
								"font" : nexacro.FontObject("bold 12px/normal \"Malgun Gothic\"")
							},
							"focused_selected" :
							{
								"color" : nexacro.ColorObject("#282828"),
								"border" : nexacro.BorderObject("1px solid #c7c7c7"),
								"padding" : nexacro.PaddingObject("6px 10px 6px 10px"),
								"font" : nexacro.FontObject("bold 12px/normal \"Malgun Gothic\"")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#ffffff"),
								"border" : nexacro.BorderObject("1px solid #c7c7c7"),
								"padding" : nexacro.PaddingObject("6px 10px 6px 10px"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
							},
							"disabled_selected" :
							{
								"color" : nexacro.ColorObject("#ffffff"),
								"border" : nexacro.BorderObject("1px solid #c7c7c7"),
								"padding" : nexacro.PaddingObject("6px 10px 6px 10px"),
								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
							}
						}
					}
				}
			},
			"tabbuttonitemtext" :
			{
				"parent" :
				{
					"tabbuttonitem" :
					{
						"parent" :
						{
							"Tab" :
							{
								"self" :
								{
									"disabled" :
									{
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("12px/normal \"Malgun Gothic\"")
									}
								}
							}
						}
					}
				}
			},
			"extrabutton" :
			{
				"parent" :
				{
					"tabbuttonitem" :
					{
						"parent" :
						{
							"Tab" :
							{
								"self" :
								{
									"enabled" :
									{
										"padding" : nexacro.PaddingObject("0px 0px 0px 20px"),
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Tabextra.png')")
									},
									"selected" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Tabextra_S.png'")
									}
								}
							}
						}
					}
				}
			},
			"head" :
			{
				"parent" :
				{
					"DatePickerControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("5px 0px 0px 0px")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#cdcdcd")
							}
						}
					}
				}
			},
			"yearstatic" :
			{
				"parent" :
				{
					"head" :
					{
						"parent" :
						{
							"DatePickerControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"font" : nexacro.FontObject("bold 14px Tahoma"),
										"color" : nexacro.ColorObject("#ffffff"),
										"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
									},
									"disabled" :
									{
										"color" : nexacro.ColorObject("#c7d4e2")
									}
								}
							}
						}
					}
				}
			},
			"monthstatic" :
			{
				"parent" :
				{
					"head" :
					{
						"parent" :
						{
							"DatePickerControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"font" : nexacro.FontObject("bold 14px Tahoma"),
										"color" : nexacro.ColorObject("#ffffff"),
										"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
									},
									"disabled" :
									{
										"color" : nexacro.ColorObject("#c7d4e2")
									}
								}
							}
						}
					}
				}
			},
			"body" :
			{
				"parent" :
				{
					"DatePickerControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #125dae, 1px solid #697888, 1px solid #697888, 1px solid #697888")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("1px solid #98a6b5")
							}
						}
					},
					"ListView" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
								"font" : nexacro.FontObject("12px Gulim")
							},
							"readonly" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
								"font" : nexacro.FontObject("12px Gulim")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
								"font" : nexacro.FontObject("12px Gulim")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
								"font" : nexacro.FontObject("12px Gulim")
							},
							"selected" :
							{
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#999999")
							}
						}
					}
				}
			},
			"weekband" :
			{
				"parent" :
				{
					"body" :
					{
						"parent" :
						{
							"DatePickerControl" :
							{
								"self" :
								{
									"disabled" :
									{
									}
								}
							}
						}
					}
				}
			},
			"weekitem" :
			{
				"parent" :
				{
					"body" :
					{
						"parent" :
						{
							"DatePickerControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"color" : nexacro.ColorObject("#ffffff")
									},
									"saturday" :
									{
										"color" : nexacro.ColorObject("#48afff")
									},
									"sunday" :
									{
										"color" : nexacro.ColorObject("#ff7986")
									},
									"disabled" :
									{
										"color" : nexacro.ColorObject("#c7d4e2")
									}
								}
							}
						}
					}
				}
			},
			"dayitem" :
			{
				"parent" :
				{
					"body" :
					{
						"parent" :
						{
							"DatePickerControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"color" : nexacro.ColorObject("#333333")
									},
									"mouseover" :
									{
										"color" : nexacro.ColorObject("#ffffff")
									},
									"focused" :
									{
										"color" : nexacro.ColorObject("#ffffff")
									},
									"selected" :
									{
										"color" : nexacro.ColorObject("#ffffff")
									},
									"today" :
									{
										"color" : nexacro.ColorObject("#ffffff")
									},
									"saturday" :
									{
										"color" : nexacro.ColorObject("#269bee")
									},
									"mouseover_saturday" :
									{
										"color" : nexacro.ColorObject("#ffffff")
									},
									"sunday" :
									{
										"color" : nexacro.ColorObject("#ff4c5e")
									},
									"mouseover_sunday" :
									{
										"color" : nexacro.ColorObject("#ffffff")
									},
									"trailingday" :
									{
										"color" : nexacro.ColorObject("#989898")
									},
									"mouseover_trailingday" :
									{
										"color" : nexacro.ColorObject("#ffffff")
									},
									"disabled" :
									{
										"color" : nexacro.ColorObject("#cdcdcd")
									},
									"disabled_selected" :
									{
									}
								}
							}
						}
					}
				}
			},
			"VScrollBarControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #b1b1b1"),
						"padding" : nexacro.PaddingObject("2px 2px 2px 2px")
					}
				}
			},
			"HScrollBarControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #b1b1b1"),
						"padding" : nexacro.PaddingObject("2px 2px 2px 2px")
					}
				}
			},
			"incbutton" :
			{
				"parent" :
				{
					"VScrollBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Vinc.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Vinc_O.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Vinc_D.png')")
							}
						}
					},
					"HScrollBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Hinc.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Hinc_O.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Hinc_D.png')")
							}
						}
					}
				}
			},
			"decbutton" :
			{
				"parent" :
				{
					"VScrollBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Vdec.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Vdec_O.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Vdec_D.png')")
							}
						}
					},
					"HScrollBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Hdec.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Hdec_O.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Hdec_D.png')")
							}
						}
					}
				}
			},
			"trackbar" :
			{
				"parent" :
				{
					"VScrollBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #c8c8c8")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("1px solid #888888")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #888888")
							},
							"selected" :
							{
								"border" : nexacro.BorderObject("1px solid #888888")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #a8a8a8")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("1px solid #d8d8d8")
							}
						}
					},
					"HScrollBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #c8c8c8")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("1px solid #888888")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #888888")
							},
							"selected" :
							{
								"border" : nexacro.BorderObject("1px solid #888888")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #a8a8a8")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("1px solid #d8d8d8")
							}
						}
					},
					"VScrollIndicatorControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("2px solid transparent")
							},
							"pushed" :
							{
							},
							"mouseover" :
							{
							}
						}
					},
					"HScrollIndicatorControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("2px solid transparent")
							},
							"pushed" :
							{
							},
							"mouseover" :
							{
							}
						}
					}
				}
			},
			"progressbar" :
			{
				"parent" :
				{
					"StatusBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #afaeae, 1px solid #d2d0d0, 1px solid #d2d0d0, 1px solid #d2d0d0")
							}
						}
					}
				}
			},
			"resizegrip" :
			{
				"parent" :
				{
					"StatusBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_grip.png\")")
							}
						}
					}
				}
			},
			"TitleBarControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"font" : nexacro.FontObject("bold 12px Gulim"),
						"color" : nexacro.ColorObject("#ffffff"),
						"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
					}
				}
			},
			"minbutton" :
			{
				"parent" :
				{
					"TitleBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Min.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Min_O.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Min_D.png')")
							}
						}
					}
				}
			},
			"normalbutton" :
			{
				"parent" :
				{
					"TitleBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Normal.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Normal_O.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Normal_D.png')")
							}
						}
					}
				}
			},
			"maxbutton" :
			{
				"parent" :
				{
					"TitleBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Max.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Max_O.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Max_D.png')")
							}
						}
					}
				}
			},
			"closebutton" :
			{
				"parent" :
				{
					"TitleBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Close.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Close_O.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_TF_Close_D.png')")
							}
						}
					}
				}
			},
			"StepControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"padding" : nexacro.PaddingObject("0px 0px 10px 0px")
					}
				}
			},
			"stepitem" :
			{
				"parent" :
				{
					"StepControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Stepitem.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Stepitem_S.png')")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Stepitem_S.png')")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Stepitem_S.png')")
							}
						}
					}
				}
			},
			"ListView" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5"),
						"color" : nexacro.ColorObject("#666666")
					},
					"readonly" :
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5"),
						"color" : nexacro.ColorObject("#666666")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"disabled" :
					{
					}
				}
			},
			"detail" :
			{
				"parent" :
				{
					"ListView" :
					{
						"self" :
						{
							"readonly" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
								"font" : nexacro.FontObject("12px Gulim")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
								"font" : nexacro.FontObject("12px Gulim")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
								"font" : nexacro.FontObject("12px Gulim")
							},
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
								"font" : nexacro.FontObject("12px Gulim")
							},
							"selected" :
							{
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#999999")
							}
						}
					}
				}
			},
			"expandbar" :
			{
				"parent" :
				{
					"body" :
					{
						"parent" :
						{
							"ListView" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("1px solid #c2c2c2")
									},
									"mouseover" :
									{
										"border" : nexacro.BorderObject("1px solid #a0a0a0")
									},
									"focused" :
									{
										"border" : nexacro.BorderObject("1px solid #a0a0a0")
									},
									"disabled" :
									{
										"color" : nexacro.ColorObject("#bbbbbb"),
										"border" : nexacro.BorderObject("1px solid #d9d9d9")
									},
									"collapse" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/cmb_WF_Drop.png')")
									},
									"expand" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_expand.png')")
									}
								}
							}
						}
					}
				}
			},
			"comboedit" :
			{
				"parent" :
				{
					"Combo" :
					{
						"class" :
						[
							{
								"cmb_default" :
								{
									"self" :
									{
										"enabled" :
										{
											"color" : nexacro.ColorObject("#0d6efd"),
											"font" : nexacro.FontObject("12px/normal \"Malgun Gothic\"")
										}
									}
								}
							}
						]
					}
				}
			},
			"Div" :
			{
				"class" :
				[
					{
						"div_line" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #0d6efd")
								}
							}
						}
					}
				]
			},
			"GridCellControl" :
			{
				"self" :
				{
					"mouseover" :
					{
					}
				}
			},
			"calendaredit" :
			{
				"parent" :
				{
					"Calendar" :
					{
						"class" :
						[
							{
								"cal_default" :
								{
									"self" :
									{
										"enabled" :
										{
											"color" : nexacro.ColorObject("#0d6efd"),
											"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
										}
									}
								}
							}
						]
					}
				}
			}
		},
		{
			"includeStatusMap" : true,
			"hasListViewExpandStatus" : true
		}
		);

		var imgcache = nexacro._getImageCacheMaps();
		imgcache[nexacro._getImageLocation("theme://images/titlebar_icon_nexacro17.ico")] = { width:16, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calendar.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calendar_D.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Spinup.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Spinup_O.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Spinup_P.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Spinup_D.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Spindown.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Spindown_O.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Spindown_P.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Spindown_D.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_Box.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_Box_O.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_Box_D.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_Box_S.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_Box_DS.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/cmb_WF_Drop.png")] = { width:9, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/cmb_WF_Drop_O.png")] = { width:9, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/cmb_WF_Drop_P.png")] = { width:9, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Grdexpand.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/btn_tree_col.png")] = { width:9, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_tree_ce.png")] = { width:9, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Treeitem.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Treeexpand.png")] = { width:14, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Treecollapse.png")] = { width:14, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Menuprev.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Menuprev_O.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Menuprev_D.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Menunext.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Menunext_O.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Menunext_D.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Menu_O.png")] = { width:19, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenuprev.png")] = { width:11, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenuprev_O.png")] = { width:11, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenuprev_D.png")] = { width:11, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenunext.png")] = { width:11, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenunext_O.png")] = { width:11, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenunext_D.png")] = { width:11, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_Popupmenu_O.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popupexpand2.png")] = { width:4, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenuprev2.png")] = { width:11, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenuprev2_O.png")] = { width:11, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenuprev2_D.png")] = { width:11, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenunext2.png")] = { width:11, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenunext2_O.png")] = { width:11, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenunext2_D.png")] = { width:11, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_Box_F.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_Radio.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_Radio_S.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_Radio_O.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_Radio_D.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_Radio_DS.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Tabextra.png")] = { width:9, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Tabprev.png")] = { width:6, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Tabprev_O.png")] = { width:6, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Tabprev_D.png")] = { width:6, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Tabnext.png")] = { width:6, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Tabnext_O.png")] = { width:6, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Tabnext_D.png")] = { width:6, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calprev.png")] = { width:6, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calprev_O.png")] = { width:6, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calnext.png")] = { width:6, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calnext_O.png")] = { width:6, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calspinup.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calspinup_O.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calspinup_D.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calspindown.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calspindown_O.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calspindown_D.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Vinc.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Vinc_O.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Vinc_D.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Vdec.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Vdec_O.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Vdec_D.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Hinc.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Hinc_O.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Hinc_D.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Hdec.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Hdec_O.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Hdec_D.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/img_grip.png")] = { width:11, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/img_TF_TitleIcon.png")] = { width:16, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Min.png")] = { width:30, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Min_O.png")] = { width:30, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Min_D.png")] = { width:30, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Normal.png")] = { width:30, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Normal_O.png")] = { width:30, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Normal_D.png")] = { width:30, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Max.png")] = { width:30, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Max_O.png")] = { width:30, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Max_D.png")] = { width:30, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Close.png")] = { width:30, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Close_O.png")] = { width:30, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Close_D.png")] = { width:30, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Stepitem.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Stepitem_S.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/btn_expand.png")] = { width:9, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/Excel-Logo_15_15.png")] = { width:15, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/btn_home_15_15_wh.png")] = { width:15, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_search.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/btn_delete_15_15.png")] = { width:15, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/btn_write_15_15.png")] = { width:15, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/btn_logout.png")] = { width:15, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/btn_message.png")] = { width:15, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/btn_Cal_N.png")] = { width:15, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Grdimg.png")] = { width:12, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/btn_CalDrop_D.png")] = { width:15, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/btn_CalDrop_N.png")] = { width:15, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/btn_CalDrop_P.png")] = { width:15, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/btn_CalHeadSpinDown_N.png")] = { width:6, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/btn_CalHeadSpinDown_P.png")] = { width:6, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/btn_CalHeadSpinUp_N.png")] = { width:6, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/btn_CalHeadSpinUp_P.png")] = { width:6, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/btn_close_D.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/btn_close_N.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/btn_close_O.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/btn_delete.png")] = { width:20, height:20 };
		imgcache[nexacro._getImageLocation("theme://images/btn_drop_D.png")] = { width:14, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_drop_N.png")] = { width:14, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_drop_P.png")] = { width:14, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_GridExpand_N.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/btn_GridExpand_P.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/btn_hdec_D.png")] = { width:8, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_hdec_N.png")] = { width:8, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_hdec_P.png")] = { width:8, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_hinc_D.png")] = { width:8, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_hinc_N.png")] = { width:8, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_hinc_P.png")] = { width:8, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_home_30_30.png")] = { width:30, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/btn_home_wh_30_30.png")] = { width:30, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/btn_insert.png")] = { width:20, height:20 };
		imgcache[nexacro._getImageLocation("theme://images/btn_max_D.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/btn_max_N.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/btn_menunext_D.png")] = { width:8, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_menunext_N.png")] = { width:8, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_menunext_P.png")] = { width:8, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_menuprev_D.png")] = { width:8, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_menuprev_N.png")] = { width:8, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_menuprev_P.png")] = { width:8, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_min_D.png")] = { width:14, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/btn_min_N.png")] = { width:14, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/btn_next_N.png")] = { width:11, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/btn_next_P.png")] = { width:11, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/btn_normal_D.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/btn_normal_N.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/btn_Pmenunext_D.png")] = { width:10, height:8 };
		imgcache[nexacro._getImageLocation("theme://images/btn_Pmenunext_N.png")] = { width:10, height:8 };
		imgcache[nexacro._getImageLocation("theme://images/btn_Pmenunext_P.png")] = { width:10, height:8 };
		imgcache[nexacro._getImageLocation("theme://images/btn_Pmenuprev_D.png")] = { width:10, height:8 };
		imgcache[nexacro._getImageLocation("theme://images/btn_Pmenuprev_N.png")] = { width:10, height:8 };
		imgcache[nexacro._getImageLocation("theme://images/btn_Pmenuprev_P.png")] = { width:10, height:8 };
		imgcache[nexacro._getImageLocation("theme://images/btn_prev_N.png")] = { width:11, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/btn_prev_P.png")] = { width:11, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/btn_search.png")] = { width:25, height:25 };
		imgcache[nexacro._getImageLocation("theme://images/btn_SpinDown_D.png")] = { width:8, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_SpinDown_N.png")] = { width:8, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_SpinDown_P.png")] = { width:8, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_SpinUp_D.png")] = { width:8, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_SpinUp_N.png")] = { width:8, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_SpinUp_P.png")] = { width:8, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_tabExtra_D.png")] = { width:10, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_tabExtra_N.png")] = { width:10, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_tabExtra_O.png")] = { width:10, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_tabnext_N.png")] = { width:5, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/btn_tabnext_P.png")] = { width:5, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/btn_tabprev_N.png")] = { width:5, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/btn_tabprev_P.png")] = { width:5, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/btn_vdec_D.png")] = { width:10, height:8 };
		imgcache[nexacro._getImageLocation("theme://images/btn_vdec_N.png")] = { width:10, height:8 };
		imgcache[nexacro._getImageLocation("theme://images/btn_vdec_P.png")] = { width:10, height:8 };
		imgcache[nexacro._getImageLocation("theme://images/btn_vinc_D.png")] = { width:10, height:8 };
		imgcache[nexacro._getImageLocation("theme://images/btn_vinc_N.png")] = { width:10, height:8 };
		imgcache[nexacro._getImageLocation("theme://images/btn_vinc_P.png")] = { width:10, height:8 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_LtrLogout.png")] = { width:41, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popupexpand.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_RtlLogout.png")] = { width:41, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_SaveP.png")] = { width:10, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Tabextra_S.png")] = { width:8, height:8 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Treecollapse.png")] = { width:9, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Treeexpand.png")] = { width:9, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_whLogout.png")] = { width:41, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_wh_Logout.png")] = { width:41, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_Popupmenu.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/file.png")] = { width:25, height:25 };
		imgcache[nexacro._getImageLocation("theme://images/ico_check.png")] = { width:12, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/ico_expand.png")] = { width:9, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/ico_title.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/ico_zoom.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/img_check_DN.png")] = { width:18, height:18 };
		imgcache[nexacro._getImageLocation("theme://images/img_check_DS.png")] = { width:18, height:18 };
		imgcache[nexacro._getImageLocation("theme://images/img_check_NN.png")] = { width:18, height:18 };
		imgcache[nexacro._getImageLocation("theme://images/img_check_NS.png")] = { width:18, height:18 };
		imgcache[nexacro._getImageLocation("theme://images/img_check_nv_NN.png")] = { width:18, height:18 };
		imgcache[nexacro._getImageLocation("theme://images/img_check_nv_NS.png")] = { width:18, height:18 };
		imgcache[nexacro._getImageLocation("theme://images/img_check_ON.png")] = { width:18, height:18 };
		imgcache[nexacro._getImageLocation("theme://images/img_check_OS.png")] = { width:18, height:18 };
		imgcache[nexacro._getImageLocation("theme://images/img_check_yl_NN.png")] = { width:18, height:18 };
		imgcache[nexacro._getImageLocation("theme://images/img_check_yl_NS.png")] = { width:18, height:18 };
		imgcache[nexacro._getImageLocation("theme://images/img_groupboxtit.png")] = { width:8, height:8 };
		imgcache[nexacro._getImageLocation("theme://images/img_groupboxtit_D.png")] = { width:8, height:8 };
		imgcache[nexacro._getImageLocation("theme://images/img_Radio_DN.png")] = { width:18, height:18 };
		imgcache[nexacro._getImageLocation("theme://images/img_Radio_DS.png")] = { width:18, height:18 };
		imgcache[nexacro._getImageLocation("theme://images/img_Radio_NN.png")] = { width:18, height:18 };
		imgcache[nexacro._getImageLocation("theme://images/img_Radio_NS.png")] = { width:18, height:18 };
		imgcache[nexacro._getImageLocation("theme://images/img_Radio_ON.png")] = { width:18, height:18 };
		imgcache[nexacro._getImageLocation("theme://images/img_Radio_OS.png")] = { width:18, height:18 };
		imgcache[nexacro._getImageLocation("theme://images/img_Step_NN.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/img_Step_NS.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/img_TreeCheck_N.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/img_TreeCheck_S.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/img_TreeClose.png")] = { width:9, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/img_TreeCollapse.png")] = { width:9, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/img_TreeExpand.png")] = { width:9, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/img_TreeItem.png")] = { width:9, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/img_TreeOpen.png")] = { width:9, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Htrackbar.png")] = { width:8, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Htrackbar_D.png")] = { width:8, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Menuimage.png")] = { width:210, height:50 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Menuitem2.png")] = { width:10, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Nexacro.png")] = { width:108, height:20 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Popupcheck.png")] = { width:7, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Popupcheck2.png")] = { width:7, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Vtrackbar.png")] = { width:5, height:8 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Vtrackbar_D.png")] = { width:5, height:8 };
		imgcache[nexacro._getImageLocation("theme://images/khLogo.png")] = { width:200, height:50 };
		imgcache[nexacro._getImageLocation("theme://images/mnu_WF_PopItemImg.png")] = { width:8, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/pop_menu_icon.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/tab_MDI_ExtraBtn.png")] = { width:7, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/tab_MDI_nv_ExtraBtn.png")] = { width:7, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/test01.png")] = { width:7, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/test02.png")] = { width:7, height:5 };
	};
}
)();
