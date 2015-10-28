/*
	由envent.js中cCheck()函数调用，选择正确的敌人进行攻击后(att=true)触发函数，扣除敌人一定血量
*/

//BOSS被攻击，发动秘技
/*function Boss_skill_attacked(tIndex){
    var n = Math.floor(Math.random() * 100) + 1;
	//把BOSS的秘技和秘技数组进行关联起来
	for (var i = 0; i < skillArrays.length; i++) {
         if (enemysArray[tIndex].skills[0] == skillArrays[i].id) {
            fl = skillArrays[i].func;
			skilltmp = skillArrays[i].mp;
			skillVar = skillArrays[i].skillVar;
			skillSuccess = skillArrays[i].success;
			effect = skillArrays[i].effect;
			skillName = skillArrays[i].name;
         }
    }
	
	//如果发动成功
	if((n<skillSuccess)&&(skilltmp<=enemysArray[tIndex].MP)){
	   console.log("BOSS被攻击发动秘技");
	   enemysArray[tIndex].MP -= skilltmp;
	   roleObj=rolesArray[rolesIndex];
       eval(fl + '(tIndex)');
	}
	else
	{//如果发动失败
		console.log("发动失败");
	   rolesArray[rolesIndex].dy = 240;
	   if (judeEnd()) {
		   recoverSpirit();
		   end = true;
		   ai = true;
		   enemyRoundShow();
		   setTimeout(function() {
				enemysAction();
		   },2000);
	   }else{end=false;}
	}
	
}
//BOSS主动攻击，发动秘技
function Boss_skill_attack(){
	var n = Math.floor(Math.random() * 100) + 1;
	console.log("秘技攻击的随机数是   "+n);
	//把BOSS的秘技和秘技数组进行关联起来
	for (var i = 0; i < skillArrays.length; i++) {
         if (enemysArray[enemyIndex].skills[0] == skillArrays[i].id) {
            fl = skillArrays[i].func;
			skilltmp = skillArrays[i].mp;
			skillVar = skillArrays[i].skillVar;
			skillSuccess = skillArrays[i].success;
			effect = skillArrays[i].effect;
			skillName = skillArrays[i].name;
         }
    }//for (var i = 0; i < skillArrays.length; i++) 
	console.log("skillSuccess   "+skillSuccess);
	if((n<skillSuccess)&&(skilltmp<=enemysArray[enemyIndex].MP)){
	   enemysArray[enemyIndex].MP -= skilltmp;
	   roleObj.HP -= skillVar;
       eval(fl + '(enemyIndex)');
	}else{
	 finish=true;
	}
}*/
//BOSS秘技攻击
function BossSkillAttacked(a,b){
	console.log("进入BOSS的秘技攻击");
	for (var i = 0; i < skillArrays.length; i++) {		     
			if (a.skills[0] == skillArrays[i].id) {
				fl = skillArrays[i].func;
				skillid = skillArrays[i].id;
				skilltmp = skillArrays[i].mp;
				skillVar = skillArrays[i].skillVar;
				skillSuccess = skillArrays[i].success;
				effect = skillArrays[i].effect;
				skillName = skillArrays[i].name;
			}
	}
	var n = Math.floor(Math.random() * 100) + 1;
	//var n=0;
	if(enemySkillAttackFail && (b instanceof roleInfo) && (b.id == WuYingWuZongRoleId)){
		n = 0;
		enemySkillAttackFailCount--;
		if(enemySkillAttackFailCount == 0){enemySkillAttackFail = false;}
	}
    if((n<skillSuccess)&&(skilltmp<=a.MP)){
            console.log("开始调用秘技攻击"+skillid);
                if(skillid == 11){
                  var n1 = Math.floor(Math.random() * 100) + 1;
                  if(n1>0 && n1<=33){skillVar = 30;}
                  if(n1>33 && n1<=66){skillVar = 60;}
                  if(n1>66 && n1<=100){skillVar = 90;}
                }
                if(skillid == 13){
                  var n2 = Math.floor(Math.random() * 100) + 1;
                  if(n2>0 && n2<=33){skillVar = 100;}
                  if(n2>33 && n2<=66){skillVar = 150;}
                  if(n2>66 && n2<=100){skillVar = 200;}
                }		
		   eval(fl+"(a,b)");  
	}
	else if(n>=skillSuccess){
		alert("技能发动失败");
	}
	else
		{
			mpAlert();
			
			setTimeout(function() {
			if(judeEnd()){//敌人主动攻击我方，敌人mp不足。
			if (b.HP > 0) {
																enemyIndex++;
																if (enemyIndex < enemysArray.length) {
																	setTimeout(enemysAction, 2000);
																	} else {
																		enemyIndex = 0;
																		count++;
																		setTimeout(dialogShow, 2000);
																		ai = false;
																	}// if (enemyIndex < enemysArray.length) 
																}
																//如果我方在BOSS的秘技攻击下死了
																else{
																deadEvent(a,b);
																var tm3 = setInterval(function() {
																	if (finish) {
																		finish = false;
																		clearInterval(tm3);
																		enemyIndex++;
																		if (enemyIndex < enemysArray.length) {
																			setTimeout(enemysAction, 2000);
																		} else {
																			enemyIndex = 0;
																			count++;
																			setTimeout(dialogShow, 2000);
																			ai = false;
																		}
																	}//finish
																}); //tm3   
			 }//else
            }
            else{//我方普通攻击敌人，敌人释放秘技且mp不足。           
				b.dy = 240;
				if (judeEnd()) {
				recoverSpirit();
				enemyRoundShow();
				end = true;
				ai = true;
				setTimeout(enemysAction, 500);
				}
				else{end=false;}
            }
    		},
  		    2500);

		}
}
//BOSS怒攻击
function BossPowerAttacked(a,b){
	console.log("进入BOSS的怒攻击");
	for (var i = 0; i < powerArrays.length; i++) {		     
			if (a.powers[0] == powerArrays[i].id) {
				fl = powerArrays[i].func;
				powertmp = powerArrays[i].p;
				powerVar = powerArrays[i].powerVar;
				powerSuccess = powerArrays[i].success;
				effect = powerArrays[i].effect;
				powerName = powerArrays[i].name;
			}
	}
	var n = Math.floor(Math.random() * 100) + 1;
	//var n=0;
    if((n<powerSuccess)&&(powertmp<=a.pow)){
           console.log("开始调用怒攻击");	
            		   
		   eval(fl+"(a,b)");  
	}
	else
	{
		powAlert();

			setTimeout(function() {
			if(judeEnd()){//敌人主动攻击我方，敌人mp不足。
			if (b.HP > 0) {
																enemyIndex++;
																if (enemyIndex < enemysArray.length) {
																	setTimeout(enemysAction, 2000);
																	} else {
																		enemyIndex = 0;
																		count++;
																		setTimeout(dialogShow, 2000);
																		ai = false;
																	}// if (enemyIndex < enemysArray.length) 
																}
																//如果我方在BOSS的秘技攻击下死了
																else{
																deadEvent(a,b);
																var tm3 = setInterval(function() {
																	if (finish) {
																		finish = false;
																		clearInterval(tm3);
																		enemyIndex++;
																		if (enemyIndex < enemysArray.length) {
																			setTimeout(enemysAction, 2000);
																		} else {
																			enemyIndex = 0;
																			count++;
																			setTimeout(dialogShow, 2000);
																			ai = false;
																		}
																	}//finish
																}); //tm3   
			 }//else
            }
            else{//我方普通攻击敌人，敌人释放秘技且mp不足。           
				b.dy = 240;
				if (judeEnd()) {
				recoverSpirit();
				enemyRoundShow();
				end = true;
				ai = true;
				setTimeout(enemysAction, 500);
				}
				else{end=false;}
            }
    		},
  		    2500);
	}
}
function PMoZhuaWuDi(a,b){//a attack b
	var countpowerNumber=2;
    console.log("into mozhuawudi");	
	function realMoZhuaWuDi(a,b){
	   		
           countpowerNumber--;

           a.pow -= powertmp;
		   b.HP -= powerVar;  

		   var tVar1 = Math.floor(rpx * b.HP / b.fullHP) + 1;
           var hp = new rectangle(b.mapX, b.mapY - 9,b.mapX, b.mapY - 9, tVar1, 5, "rgb(0,255,0)");
           var hpBox = new rectangle(b.mapX, b.mapY - 10,b.mapX, b.mapY - 10, rpx, 7, "rgb(0,0,0)");
           var e = new Image();
           e.src = effect;
           var powerShow = new pic(b.mapX - rpx - 6, b.mapY - rpx - 15,b.mapX - rpx - 6, b.mapY - rpx - 15, 3 * rpx, 3 * rpx, 0, 0, 350, 350, e);
	       var attackText = new text("-" + powerVar,b.mapX + rpx / 4, b.mapY + rpx / 2, b.mapX + rpx / 4, b.mapY + rpx / 2, "rgb(255,0,0)", "bold 30px FangSong");
	       var h = new Image();
	       h.src = a.halfBody;
	       var hs = new picture(48*5-mapMovX, 48*4-mapMovY,48*5-mapMovX, 48*4-mapMovY, 4 * rpx, 4 * rpx, h);
		   attackShow.push(hs);

		   FuGaiCeng(a,b);

		    var t2 = setInterval(function() {
	         var sn = new text(powerName.charAt(countInterval), hs.sx-mapMovX + hs.swidth + countInterval * rpx, hs.sy-mapMovY + hs.sheight / 2 + rpx,hs.sx-mapMovX + hs.swidth + countInterval * rpx, hs.sy-mapMovY + hs.sheight / 2 + rpx, "rgb(255,255,255)", "bold 40px KaiTi");
	         attackShow.push(sn);
	         countInterval++;
	         if (countInterval == powerName.length + 1) {
	               countInterval = 0;
	               clearInterval(t2);
	               clearArray(attackShow);
	               finish = true;
	          }
		    }, 500);//t2½
            
            var t3=setInterval(function(){
                if (finish) {	
				  clearInterval(t3);
		          finish = false;
		          attackAction(a);
		          flicker(b);
		          attackShow.push(attackText);
		          attackShow.push(powerShow);
				  var t4 = setInterval(function() {
						attackText.mapY--;
						 if (powerShow.dx < 4900) {powerShow.dx += 350; } 
						 else {powerShow.dx = 0;}
						
						 if (attackText.mapY == b.mapY) {
							   clearInterval(t4);
							   clearArray(attackShow);
						  }
				  },50);//t4

                  if (hp.swidth > 0) {
			          hpShow.push(hpBox);
			          hpShow.push(hp);
                      var tVar2 = Math.floor(rpx * powerVar / b.fullHP) + 1;
                      var t5 = setInterval(function() {
	                      hp.swidth--;
	                      countInterval++;
	       				  if (countInterval == tVar2 || hp.swidth <= 0) {					  
	                        countInterval = 0;
	                        clearInterval(t5);
	                        clearArray(hpShow);
						    clearArray(shadowShow);
						    bossPowerEnd=true;
				          }
			          },50);
			      }else{
			  	      clearArray(shadowShow);
				      bossPowerEnd=true;
		          }
				  //finish's else
				}
            });//t3
         
         //
        if(judeEnd()){
            var boss_attack_us_boss_power_end=setInterval(function(){
						    if(bossPowerEnd){
									clearInterval(boss_attack_us_boss_power_end);
									bossPowerEnd = false;
																	  
									if (b.HP > 0) {
										console.log("2 time mozhuawudi");
										console.log("countpowerNumber:   "+countpowerNumber);
										if(countpowerNumber!=0){
											setTimeout(function(){
											   realMoZhuaWuDi(a,b);
										    }, 2000); 
										}else{
											if (b.HP > 0) {
												console.log("here over");							  
												a.dy = 240;
												enemyIndex++;
												if (enemyIndex < enemysArray.length) {
														setTimeout(enemysAction, 2000);
												} else {	
													enemyIndex = 0;
													count++;
													setTimeout(dialogShow, 2000);
													ai = false;
												}									 
											}else{
												deadEvent(null,b);
												var tm3 = setInterval(function() {
														if (finish) {
															finish = false;
															clearInterval(tm3);
															enemyIndex++;
															if (enemyIndex < enemysArray.length) {
													            setTimeout(enemysAction, 2000);
															} else {
																enemyIndex = 0;
																count++;
																setTimeout(dialogShow, 2000);
																ai = false;
															}
														}//finish
												}); //tm3   
											}
										}
										
																 
									}else{
											deadEvent(null,b);
											var tm3 = setInterval(function() {
														if (finish) {
															finish = false;
															clearInterval(tm3);
															enemyIndex++;
															if (enemyIndex < enemysArray.length) {
																		setTimeout(enemysAction, 2000);
															} else {
																	enemyIndex = 0;
																	count++;
																	setTimeout(dialogShow, 2000);
																	ai = false;
															}
														}//finish
											}); //tm3   
									}//else
							}//finish
			});//boss_power_end1
        }else{
           var we_attack_boss_boss_power_end=setInterval(function(){
                                                     if(bossPowerEnd){
                                                         console.log("侦听到第一次怒攻击发动结束（不管有没有发动成功）");
                                                          clearInterval(we_attack_boss_boss_power_end);
                                                          bossPowerEnd = false;
                                                          if(b.HP>0){
                                                            if(countpowerNumber!=0){  
	                                                            setTimeout(function(){
												                    realMoZhuaWuDi(a,b);
											                    }, 2000); 
                                                            }else{
                                                                   	 b.dy = 240;
                                                                     if (judeEnd()) {
                                                                           recoverSpirit();
                                                                           end = true;
                                                                           ai = true;
                                                                           enemyRoundShow();
                                                                           setTimeout(function() {
                                                                                enemysAction();
                                                                           },2000);
                                                                       }else{end=false;}     
                                                            }
                                                          }
                                                          else{
                                                                
                                                                deadEvent(a,b);
                                                                a.dy = 240;
                                                                if(a instanceof roleInfo){
                                                                	console.log("solve still could walk");
                                                                    var t8 = setInterval(function() {
													                    if (finish) {
													                        finish = false;
													                        clearInterval(t8);
                                                                            a.dy = 240;
													                        if (judeEnd()) {
													                        	console.log("solve still could walk111");
																					//--
																					recoverSpirit();
																					//-----------
																					enemyRoundShow();
													                            end = true;
													                            ai = true;
													                            setTimeout(enemysAction);
													                        }else{ console.log("solve still could walk22222");end=false;}
													                        
													                    }
													                });//
                                                                }else{
                                                                	 var our_role_dead = setInterval(function() {
	                                                                    if (finish) {
	                                                                        finish = false;
	                                                                        clearInterval(our_role_dead);
	                                                                        if (!judgeOver()) {
	                                                                            if (judeEnd()) {
	                                                                                recoverSpirit();
	                                                                                end = true;
	                                                                                ai = true;
	                                                                                enemyRoundShow();
	                                                                                setTimeout(function() {
	                                                                                    enemysAction();
	                                                                                },
	                                                                                2000);
	                                                                            }else{end=false;}
	                                                                        } else {
	                                                                            game_over_page();
	                                                                            
	                                                                        }
	                                                                    }//finish
                                                                    });
                                                                }                                                             
                                                                                                                                
                                                          }//else
                                                     }//finish
            });//we_attack_boss_boss_power_end
        }
                                                   		   

	}//realMoZhuaWuDi
    console.log("real mozhuawudi");
    //normal attack
    if(a instanceof roleInfo){
          normalAttack(a,b); 
          att_end = setInterval(function() {
          if (finish) {
            finish = false;
            clearInterval(att_end);
			
            if (b.HP > 0) {
                normalAttack(b,a);
                var t1 = setInterval(function() {
                    if (finish) {
                        finish = false;
                        clearInterval(t1);
						
                        if (a.HP > 0) {
                            
                            var n = Math.floor(Math.random() * 100) + 1; 
							//var n=0;
                            if (n <= powerSuccess) { //
							    realMoZhuaWuDi(a,b);
								
                            } 	
							else{
							
                                failAlert("发动失败",a);
									a.dy = 240;
									if (judeEnd()) {
										//-
										 recoverSpirit();
										//-----------
										setTimeout(enemyRoundShow,1500);
										end = true;
										ai = true;
										setTimeout(enemysAction,3000);
									}
									else{ end=false;}
                            }
                        } 
						
						else {
                            deadEvent(null,a);
                            var t7 = setInterval(function() {
                                if (finish) {
                                    finish = false;
                                    clearInterval(t7);
                                    if (!judgeOver()) {
                                        if (judeEnd()) {
											//--
											 recoverSpirit();
											//-----------
											enemyRoundShow();
                                            end = true;
                                            ai = true;
                                            enemysAction();
                                        }else{end=false;}
                                    } 
									else {game_over_page();}
                                }
                            });//
                        }
                    }//
                });//
            }
			//
			else {
                a.dy = 240;
                deadEvent(a,b);
                var t8 = setInterval(function() {
                    if (finish) {
                        finish = false;
                        clearInterval(t8);
                        if (judeEnd()) {
								//--
								recoverSpirit();
								//-----------
								enemyRoundShow();
                            end = true;
                            ai = true;
                            setTimeout(enemysAction);
                        }else{ end=false;}
                        //drawAll();
                    }
                });//
            }
        }//
    });//
    }else{
    	realMoZhuaWuDi(a,b);
    }
    
}

//喷火龙技能
function SPengHuoLong(a,b){//a attack b
    console.log("into penhuolong");	

    function realPenHuoLong(a,b){

           a.MP -= skilltmp;
		   b.HP -= skillVar;

  //显示半身像
  var tVar1 = Math.floor(rpx * b.HP / b.fullHP) + 1;
  var hp = new rectangle(b.mapX, b.mapY - 9,b.mapX, b.mapY - 9, tVar1, 5, "rgb(0,255,0)");
  var hpBox = new rectangle(b.mapX, b.mapY - 10,b.mapX, b.mapY - 10, rpx, 7, "rgb(0,0,0)");
  var e = new Image();
  e.src = effect;
  var skillShow = new pic(b.mapX - rpx - 6, b.mapY - rpx - 15,b.mapX - rpx - 6, b.mapY - rpx - 15, 3 * rpx, 3 * rpx, 0, 0, 350, 350, e);
  var attackText = new text("-" + skillVar,b.mapX + rpx / 4, b.mapY + rpx / 2, b.mapX + rpx / 4, b.mapY + rpx / 2, "rgb(255,0,0)", "bold 30px FangSong");
  var h = new Image();
  h.src = a.halfBody;
  var hs = new picture(48*5-mapMovX, 48*4-mapMovY,48*5-mapMovX, 48*4-mapMovY, 4 * rpx, 4 * rpx, h);
  attackShow.push(hs);

  //喷火龙字样
  var t2 = setInterval(function() {
      var sn = new text(skillName.charAt(countInterval),  hs.sx -mapMovX+ hs.swidth + countInterval * rpx, hs.sy -mapMovY+ hs.sheight / 2 + rpx,hs.sx -mapMovX+ hs.swidth + countInterval * rpx, hs.sy -mapMovY+ hs.sheight / 2 + rpx, "rgb(153,50,204)", "bold 40px KaiTi");
      attackShow.push(sn);
      countInterval++;
      if (countInterval == skillName.length + 1) {
           countInterval = 0;
           clearInterval(t2);
           clearArray(attackShow);
           finish = true;
       }
     },
  500);//t2
  var t3=setInterval(function(){
      if (finish) {
	        clearInterval(t3);
            finish = false;
            attackAction(a);
            flicker(b);
            attackShow.push(attackText);
            attackShow.push(skillShow);
			var t4 = setInterval(function() {
                     attackText.mapY--;
                     if (skillShow.dx < 4900) {
                          skillShow.dx += 350;
                     } else {
                          skillShow.dx = 0;
                     }
                    if (attackText.mapY == b.mapY) {
                         clearInterval(t4);
                         a.dy = 240;
                         clearArray(attackShow);
					     //finish=true;
                      }
                      },
            50);//t4
	        if (hp.swidth > 0) {
                hpShow.push(hpBox);
                hpShow.push(hp);
                var tVar2 = Math.floor(rpx * skillVar / b.fullHP) + 1;
                var t5 = setInterval(function() {
                          hp.swidth--;
                          countInterval++;
                          if (countInterval == tVar2 || hp.swidth <= 0) {
                              countInterval = 0;
                              clearInterval(t5);
                              clearArray(hpShow);
							  finish=true;
                          }
                       },
                50);//t5
            }// if (hp.swidth > 0) 
	  }//finish
  });//t3

    if(judeEnd()){
    	 var boss_skill_end=setInterval(function(){
																if(finish){
																clearInterval(boss_skill_end);
																finish = false;
																//如果我方在BOSS的秘技攻击下还活着
																if (b.HP > 0) {
																enemyIndex++;
																if (enemyIndex < enemysArray.length) {
																	setTimeout(enemysAction, 2000);
																	} else {
																		enemyIndex = 0;
																		count++;
																		setTimeout(dialogShow, 2000);
																		ai = false;
																	}// if (enemyIndex < enemysArray.length) 
																}
																//如果我方在BOSS的秘技攻击下死了
																else{
																deadEvent(null,b);
																var tm3 = setInterval(function() {
																	if (finish) {
																		finish = false;
																		clearInterval(tm3);
																		enemyIndex++;
																		if (enemyIndex < enemysArray.length) {
																			setTimeout(enemysAction, 2000);
																		} else {
																			enemyIndex = 0;
																			count++;
																			setTimeout(dialogShow, 2000);
																			ai = false;
																		}
																	}//finish
																}); //tm3   
															}//else
														}//finish
		});//var boss_skill_end
    }
    else{
    	 var we_skill_end=setInterval(function (){
											if (finish){											
												clearInterval(we_skill_end);
												finish=false;
												
												if (b.HP <= 0) {
													deadEvent(a,b);
													we_skill_end = setInterval(function() {
														if (finish) {
															finish = false;
															clearInterval(we_skill_end);
															if (judeEnd()) {
																//---恢复精神力---
															    recoverSpirit();
																//-----------
															    enemyRoundShow();
																end = true;
																ai = true;
																setTimeout(enemysAction, 500);
															}else{ end=false;}
														}
													});
												}else{
													b.dy = 240;
													if (judeEnd()) {
													          	//---恢复精神力---
															    recoverSpirit();
																//-----------
																enemyRoundShow();
																end = true;
																ai = true;
																setTimeout(enemysAction, 500);
															}else{ end=false;}}
											}
										});
    }

	}//real penhuolong

    if(a instanceof roleInfo){
          normalAttack(a,b); 
          att_end = setInterval(function() {
          if (finish) {
            finish = false;
            clearInterval(att_end);
			
            if (b.HP > 0) {
                normalAttack(b,a);
                var t1 = setInterval(function() {
                    if (finish) {
                        finish = false;
                        clearInterval(t1);
						
                        if (a.HP > 0) {
                            
                            var n = Math.floor(Math.random() * 100) + 1; 
							//var n=0;
                            if (n <= skillSuccess) { //
							    realPenHuoLong(a,b);							
                            } 	
							else{
							
                                failAlert("发动失败",a);
									a.dy = 240;
									if (judeEnd()) {
										//-
										 recoverSpirit();
										//-----------
										setTimeout(enemyRoundShow,1500);
										end = true;
										ai = true;
										setTimeout(enemysAction,3000);
									}
									else{ end=false;}
                            }
                        } 
						
						else {
                            deadEvent(null,a);
                            var t7 = setInterval(function() {
                                if (finish) {
                                    finish = false;
                                    clearInterval(t7);
                                    if (!judgeOver()) {
                                        if (judeEnd()) {
											//--
											 recoverSpirit();
											//-----------
											enemyRoundShow();
                                            end = true;
                                            ai = true;
                                            enemysAction();
                                        }else{end=false;}
                                    } 
									else {game_over_page();}
                                }
                            });//
                        }
                    }//
                });//
            }
			//
			else {
                a.dy = 240;
                deadEvent(a,b);
                var t8 = setInterval(function() {
                    if (finish) {
                        finish = false;
                        clearInterval(t8);
                        if (judeEnd()) {
								//--
								recoverSpirit();
								//-----------
								enemyRoundShow();
                            end = true;
                            ai = true;
                            setTimeout(enemysAction);
                        }else{ end=false;}
                        
                    }
                });//
            }
        }//
    });//
    }else{
    	realPenHuoLong(a,b);
    }

}
//飞隐双身
function FeiYinShuangShen(a,b){//a attack b

    function realFeiYinShuangShen(a,b){
    	   if(a instanceof roleInfo){
    	   	FeiYinShuangShenRoleId = a.id;
    	   	enemyNormalAttackFailCount = 5;
    	   	enemyNormalAttackFail = true;
    	   }
           else{
           	a.MP -= skilltmp;
           	weNormalAttackFail = true;
           }
           

  //显示半身像
  var tVar1 = Math.floor(rpx * b.HP / b.fullHP) + 1;
  var hp = new rectangle(b.mapX, b.mapY - 9,b.mapX, b.mapY - 9, tVar1, 5, "rgb(0,255,0)");
  var hpBox = new rectangle(b.mapX, b.mapY - 10,b.mapX, b.mapY - 10, rpx, 7, "rgb(0,0,0)");
  var e = new Image();
  e.src = effect;
  var skillShow = new pic(b.mapX - rpx - 6, b.mapY - rpx - 15,b.mapX - rpx - 6, b.mapY - rpx - 15, 3 * rpx, 3 * rpx, 0, 0, 350, 350, e);
  var attackText = new text("-" + skillVar,b.mapX + rpx / 4, b.mapY + rpx / 2, b.mapX + rpx / 4, b.mapY + rpx / 2, "rgb(255,0,0)", "bold 30px FangSong");
  var h = new Image();
  h.src = a.halfBody;
  var hs = new picture(48*5-mapMovX, 48*4-mapMovY,48*5-mapMovX, 48*4-mapMovY, 4 * rpx, 4 * rpx, h);
  attackShow.push(hs);

  var t2 = setInterval(function() {
      var sn = new text(skillName.charAt(countInterval),  hs.sx -mapMovX+ hs.swidth + countInterval * rpx, hs.sy -mapMovY+ hs.sheight / 2 + rpx,hs.sx -mapMovX+ hs.swidth + countInterval * rpx, hs.sy -mapMovY+ hs.sheight / 2 + rpx, "rgb(153,50,204)", "bold 40px KaiTi");
      attackShow.push(sn);
      countInterval++;
      if (countInterval == skillName.length + 1) {
           countInterval = 0;
           clearInterval(t2);
           clearArray(attackShow);
           finish = true;
       }
     },
  500);//t2
  var t3=setInterval(function(){
      if (finish) {
	        clearInterval(t3);
            finish = false;
            attackAction(a);
            flicker(b);
            attackShow.push(attackText);
            attackShow.push(skillShow);
			var t4 = setInterval(function() {
                     attackText.mapY--;
                     if (skillShow.dx < 4900) {
                          skillShow.dx += 350;
                     } else {
                          skillShow.dx = 0;
                     }
                    if (attackText.mapY == b.mapY) {
                         clearInterval(t4);
                         a.dy = 240;
                         clearArray(attackShow);
					     //finish=true;
                      }
                      },
            50);//t4
	        if (hp.swidth > 0) {
                hpShow.push(hpBox);
                hpShow.push(hp);
                var tVar2 = Math.floor(rpx * skillVar / b.fullHP) + 1;
                var t5 = setInterval(function() {
                          hp.swidth--;
                          countInterval++;
                          if (countInterval == tVar2 || hp.swidth <= 0) {
                              countInterval = 0;
                              clearInterval(t5);
                              clearArray(hpShow);
							  finish=true;
                          }
                       },
                50);//t5
            }// if (hp.swidth > 0) 
	  }//finish
  });//t3

    if(judeEnd()){
    	 var boss_skill_end=setInterval(function(){
																if(finish){
																clearInterval(boss_skill_end);
																finish = false;
																//如果我方在BOSS的秘技攻击下还活着
																if (b.HP > 0) {
																enemyIndex++;
																if (enemyIndex < enemysArray.length) {
																	setTimeout(enemysAction, 2000);
																	} else {
																		enemyIndex = 0;
																		count++;
																		setTimeout(dialogShow, 2000);
																		ai = false;
																	}// if (enemyIndex < enemysArray.length) 
																}
																//如果我方在BOSS的秘技攻击下死了
																else{
																deadEvent(null,b);
																var tm3 = setInterval(function() {
																	if (finish) {
																		finish = false;
																		clearInterval(tm3);
																		enemyIndex++;
																		if (enemyIndex < enemysArray.length) {
																			setTimeout(enemysAction, 2000);
																		} else {
																			enemyIndex = 0;
																			count++;
																			setTimeout(dialogShow, 2000);
																			ai = false;
																		}
																	}//finish
																}); //tm3   
															}//else
														}//finish
		});//var boss_skill_end
    }
    else{
    	 var we_skill_end=setInterval(function (){
											if (finish){											
												clearInterval(we_skill_end);
												finish=false;
												
												if (b.HP <= 0) {
													deadEvent(a,b);
													we_skill_end = setInterval(function() {
														if (finish) {
															finish = false;
															clearInterval(we_skill_end);
															if (judeEnd()) {
																//---恢复精神力---
															    recoverSpirit();
																//-----------
															    enemyRoundShow();
																end = true;
																ai = true;
																setTimeout(enemysAction, 500);
															}else{ end=false;}
														}
													});
												}else{
													b.dy = 240;
													if (judeEnd()) {
													          	//---恢复精神力---
															    recoverSpirit();
																//-----------
																enemyRoundShow();
																end = true;
																ai = true;
																setTimeout(enemysAction, 500);
															}else{ end=false;}}
											}
										});
    }

	}

    if(a instanceof roleInfo){
          normalAttack(a,b); 
          att_end = setInterval(function() {
          if (finish) {
            finish = false;
            clearInterval(att_end);
			
            if (b.HP > 0) {
                normalAttack(b,a);
                var t1 = setInterval(function() {
                    if (finish) {
                        finish = false;
                        clearInterval(t1);
						
                        if (a.HP > 0) {
                            
                            var n = Math.floor(Math.random() * 100) + 1;
                            if (n <= skillSuccess) { //
							    realFeiYinShuangShen(a,b);								
                            } 	
							else{
							
                                failAlert("发动失败",a);
									a.dy = 240;
									if (judeEnd()) {
										//-
										 recoverSpirit();
										//-----------
										setTimeout(enemyRoundShow,1500);
										end = true;
										ai = true;
										setTimeout(enemysAction,3000);
									}
									else{ end=false;}
                            }
                        } 
						
						else {
                            deadEvent(null,a);
                            var t7 = setInterval(function() {
                                if (finish) {
                                    finish = false;
                                    clearInterval(t7);
                                    if (!judgeOver()) {
                                        if (judeEnd()) {
											//--
											 recoverSpirit();
											//-----------
											enemyRoundShow();
                                            end = true;
                                            ai = true;
                                            enemysAction();
                                        }else{end=false;}
                                    } 
									else {game_over_page();}
                                }
                            });//
                        }
                    }//
                });//
            }
			//
			else {
                a.dy = 240;
                deadEvent(a,b);
                var t8 = setInterval(function() {
                    if (finish) {
                        finish = false;
                        clearInterval(t8);
                        if (judeEnd()) {
								//--
								recoverSpirit();
								//-----------
								enemyRoundShow();
                            end = true;
                            ai = true;
                            setTimeout(enemysAction);
                        }else{ end=false;}
                        
                    }
                });//
            }
        }//
    });//
    }else{
    	realFeiYinShuangShen(a,b);
    }

}
//无影无踪
function WuYingWuZong(a,b){//a attack b

    function realWuYingWuZong(a,b){
    	   if(a instanceof roleInfo){
    	   	WuYingWuZongRoleId = a.id;
    	   	enemySkillAttackFailCount = 5;
    	   	enemySkillAttackFail = true;
    	   }
           else{
           	a.MP -= skilltmp;
           	weSkillAttackFail = true;
           }
           

  //显示半身像
  var tVar1 = Math.floor(rpx * b.HP / b.fullHP) + 1;
  var hp = new rectangle(b.mapX, b.mapY - 9,b.mapX, b.mapY - 9, tVar1, 5, "rgb(0,255,0)");
  var hpBox = new rectangle(b.mapX, b.mapY - 10,b.mapX, b.mapY - 10, rpx, 7, "rgb(0,0,0)");
  var e = new Image();
  e.src = effect;
  var skillShow = new pic(b.mapX - rpx - 6, b.mapY - rpx - 15,b.mapX - rpx - 6, b.mapY - rpx - 15, 3 * rpx, 3 * rpx, 0, 0, 350, 350, e);
  var attackText = new text("-" + skillVar,b.mapX + rpx / 4, b.mapY + rpx / 2, b.mapX + rpx / 4, b.mapY + rpx / 2, "rgb(255,0,0)", "bold 30px FangSong");
  var h = new Image();
  h.src = a.halfBody;
  var hs = new picture(48*5-mapMovX, 48*4-mapMovY,48*5-mapMovX, 48*4-mapMovY, 4 * rpx, 4 * rpx, h);
  attackShow.push(hs);

  var t2 = setInterval(function() {
      var sn = new text(skillName.charAt(countInterval),  hs.sx -mapMovX+ hs.swidth + countInterval * rpx, hs.sy -mapMovY+ hs.sheight / 2 + rpx,hs.sx -mapMovX+ hs.swidth + countInterval * rpx, hs.sy -mapMovY+ hs.sheight / 2 + rpx, "rgb(153,50,204)", "bold 40px KaiTi");
      attackShow.push(sn);
      countInterval++;
      if (countInterval == skillName.length + 1) {
           countInterval = 0;
           clearInterval(t2);
           clearArray(attackShow);
           finish = true;
       }
     },
  500);//t2
  var t3=setInterval(function(){
      if (finish) {
	        clearInterval(t3);
            finish = false;
            attackAction(a);
            flicker(b);
            attackShow.push(attackText);
            attackShow.push(skillShow);
			var t4 = setInterval(function() {
                     attackText.mapY--;
                     if (skillShow.dx < 4900) {
                          skillShow.dx += 350;
                     } else {
                          skillShow.dx = 0;
                     }
                    if (attackText.mapY == b.mapY) {
                         clearInterval(t4);
                         a.dy = 240;
                         clearArray(attackShow);
					     //finish=true;
                      }
                      },
            50);//t4
	        if (hp.swidth > 0) {
                hpShow.push(hpBox);
                hpShow.push(hp);
                var tVar2 = Math.floor(rpx * skillVar / b.fullHP) + 1;
                var t5 = setInterval(function() {
                          hp.swidth--;
                          countInterval++;
                          if (countInterval == tVar2 || hp.swidth <= 0) {
                              countInterval = 0;
                              clearInterval(t5);
                              clearArray(hpShow);
							  finish=true;
                          }
                       },
                50);//t5
            }// if (hp.swidth > 0) 
	  }//finish
  });//t3

    if(judeEnd()){
    	 var boss_skill_end=setInterval(function(){
																if(finish){
																clearInterval(boss_skill_end);
																finish = false;
																//如果我方在BOSS的秘技攻击下还活着
																if (b.HP > 0) {
																enemyIndex++;
																if (enemyIndex < enemysArray.length) {
																	setTimeout(enemysAction, 2000);
																	} else {
																		enemyIndex = 0;
																		count++;
																		setTimeout(dialogShow, 2000);
																		ai = false;
																	}// if (enemyIndex < enemysArray.length) 
																}
																//如果我方在BOSS的秘技攻击下死了
																else{
																deadEvent(null,b);
																var tm3 = setInterval(function() {
																	if (finish) {
																		finish = false;
																		clearInterval(tm3);
																		enemyIndex++;
																		if (enemyIndex < enemysArray.length) {
																			setTimeout(enemysAction, 2000);
																		} else {
																			enemyIndex = 0;
																			count++;
																			setTimeout(dialogShow, 2000);
																			ai = false;
																		}
																	}//finish
																}); //tm3   
															}//else
														}//finish
		});//var boss_skill_end
    }
    else{
    	 var we_skill_end=setInterval(function (){
											if (finish){											
												clearInterval(we_skill_end);
												finish=false;
												
												if (b.HP <= 0) {
													deadEvent(a,b);
													we_skill_end = setInterval(function() {
														if (finish) {
															finish = false;
															clearInterval(we_skill_end);
															if (judeEnd()) {
																//---恢复精神力---
															    recoverSpirit();
																//-----------
															    enemyRoundShow();
																end = true;
																ai = true;
																setTimeout(enemysAction, 500);
															}else{ end=false;}
														}
													});
												}else{
													b.dy = 240;
													if (judeEnd()){
													          	//---恢复精神力---
															    recoverSpirit();
																//-----------
																enemyRoundShow();
																end = true;
																ai = true;
																setTimeout(enemysAction, 500);
															}else{ end=false;}}
											}
										});
    }

	}

    if(a instanceof roleInfo){
          normalAttack(a,b); 
          att_end = setInterval(function() {
          if (finish) {
            finish = false;
            clearInterval(att_end);
			
            if (b.HP > 0) {
                normalAttack(b,a);
                var t1 = setInterval(function() {
                    if (finish) {
                        finish = false;
                        clearInterval(t1);
						
                        if (a.HP > 0) {
                            
                            var n = Math.floor(Math.random() * 100) + 1;
                            if (n <= skillSuccess) { //
							    realWuYingWuZong(a,b);								
                            } 	
							else{
							
                                failAlert("发动失败",a);
									a.dy = 240;
									if (judeEnd()) {
										//-
										 recoverSpirit();
										//-----------
										setTimeout(enemyRoundShow,1500);
										end = true;
										ai = true;
										setTimeout(enemysAction,3000);
									}
									else{ end=false;}
                            }
                        } 
						
						else {
                            deadEvent(null,a);
                            var t7 = setInterval(function() {
                                if (finish) {
                                    finish = false;
                                    clearInterval(t7);
                                    if (!judgeOver()) {
                                        if (judeEnd()) {
											//--
											 recoverSpirit();
											//-----------
											enemyRoundShow();
                                            end = true;
                                            ai = true;
                                            enemysAction();
                                        }else{end=false;}
                                    } 
									else {game_over_page();}
                                }
                            });//
                        }
                    }//
                });//
            }
			//
			else {
                a.dy = 240;
                deadEvent(a,b);
                var t8 = setInterval(function() {
                    if (finish) {
                        finish = false;
                        clearInterval(t8);
                        if (judeEnd()) {
								//--
								recoverSpirit();
								//-----------
								enemyRoundShow();
                            end = true;
                            ai = true;
                            setTimeout(enemysAction);
                        }else{ end=false;}
                        
                    }
                });//
            }
        }//
    });//
    }else{
    	realWuYingWuZong(a,b);
    }

}
//喝酒催魂术
function HeJiuCuiHunShu(a,b){//a attack b
    
    function realHeJiuCuiHunShu(a,b){

         a.MP -= skilltmp;
		 b.HP -= skillVar;
		 var thp = a.HP;
  		 a.HP += skillVar;
  		 if (a.HP > a.fullHP) 
  		 {a.HP = a.fullHP;}
  		 thp = a.HP - thp;

  var tVar1 = Math.floor(rpx * b.HP / b.fullHP) + 1;
  var hp = new rectangle(b.mapX, b.mapY - 9,b.mapX, b.mapY - 9, tVar1, 5, "rgb(0,255,0)");
  var hpBox = new rectangle(b.mapX, b.mapY - 10,b.mapX, b.mapY - 10, rpx, 7, "rgb(0,0,0)");
  var e = new Image();
  e.src = effect;
  var skillShow = new pic(b.mapX - rpx - 6, b.mapY - rpx - 15,b.mapX - rpx - 6, b.mapY - rpx - 15, 3 * rpx, 3 * rpx, 0, 0, 350, 350, e);
  var attackText = new text("-" + skillVar,b.mapX + rpx / 4, b.mapY + rpx / 2, b.mapX + rpx / 4, b.mapY + rpx / 2, "rgb(255,0,0)", "bold 30px FangSong");
  var h = new Image();
  h.src = a.halfBody;
  var hs = new picture(48*5-mapMovX, 48*4-mapMovY,48*5-mapMovX, 48*4-mapMovY, 4 * rpx, 4 * rpx, h);
  var s = "HP+" + thp;
  var t = new text(s,a.mapX, a.mapY + 1 / 2 * rpx, a.sx, a.sy + 1 / 2 * rpx, "rgb(0,255,0)", "bold 30px FangSong");
  var hx = new Image();
  hx.src = effect;  
  var RecoverShow = new pic(a.mapX - rpx,a.mapY - rpx,a.sx - rpx, a.sy - rpx, 3 * rpx, 3 * rpx, 0, 0, 350, 350, hx);
  attackShow.push(hs);



  var t2 = setInterval(function() {
      var sn = new text(skillName.charAt(countInterval),  hs.sx -mapMovX+ hs.swidth + countInterval * rpx, hs.sy -mapMovY+ hs.sheight / 2 + rpx,hs.sx -mapMovX+ hs.swidth + countInterval * rpx, hs.sy -mapMovY+ hs.sheight / 2 + rpx, "rgb(153,50,204)", "bold 40px KaiTi");
      attackShow.push(sn);
      countInterval++;
      if (countInterval == skillName.length + 1) {
           countInterval = 0;
           clearInterval(t2);
           clearArray(attackShow);
           finish = true;
       }
     },
  500);//t2



  var t3=setInterval(function(){
      if (finish) {
	        clearInterval(t3);
            finish = false;
            attackAction(a);
            flicker(b);
            attackShow.push(attackText);
            attackShow.push(skillShow);

			var t4 = setInterval(function() {
                     attackText.mapY--;
                     if (skillShow.dx < 4900) {
                          skillShow.dx += 350;
                     } else {
                          skillShow.dx = 0;
                     }
                    if (attackText.mapY == b.mapY) {
                         clearInterval(t4);
                         a.dy = 240;
                         clearArray(attackShow);
					     //finish=true;
                      }
                      },
            50);//t4
	        if (hp.swidth > 0) {
                hpShow.push(hpBox);
                hpShow.push(hp);
                var tVar2 = Math.floor(rpx * skillVar / b.fullHP) + 1;
                var t5 = setInterval(function() {
                          hp.swidth--;
                          countInterval++;
                          if (countInterval == tVar2 || hp.swidth <= 0) {
                              countInterval = 0;
                              clearInterval(t5);
                              clearArray(hpShow);
							  finish=true;
                          }
                       },
                50);//t5

          		attackShow.push(t);
         		attackShow.push(RecoverShow); 		
        	    var t1 = setInterval(function() {
     			   t.mapY--;
     		       if (RecoverShow.dx < 4900) {
                   RecoverShow.dx += 350;
                   } else {
                   RecoverShow.dx = 0;
                   }
                   if (t.mapY == a.mapY) {
    		       clearInterval(t1);
    		       clearArray(attackShow);
       			   }
    			},
   			 75);

            }// if (hp.swidth > 0) 
	  }//finish
  });//t3

   

    if(judeEnd()){
    	 var boss_skill_end=setInterval(function(){
																if(finish){
																clearInterval(boss_skill_end);
																finish = false;
																//如果我方在BOSS的秘技攻击下还活着
																if (b.HP > 0) {
																enemyIndex++;
																if (enemyIndex < enemysArray.length) {
																	setTimeout(enemysAction, 2000);
																	} else {
																		enemyIndex = 0;
																		count++;
																		setTimeout(dialogShow, 2000);
																		ai = false;
																	}// if (enemyIndex < enemysArray.length) 
																}
																//如果我方在BOSS的秘技攻击下死了
																else{
																deadEvent(a,b);
																var tm3 = setInterval(function() {
																	if (finish) {
																		finish = false;
																		clearInterval(tm3);
																		enemyIndex++;
																		if (enemyIndex < enemysArray.length) {
																			setTimeout(enemysAction, 2000);
																		} else {
																			enemyIndex = 0;
																			count++;
																			setTimeout(dialogShow, 2000);
																			ai = false;
																		}
																	}//finish
																}); //tm3   
															}//else
														}//finish
		});//var boss_skill_end
    }
    else{
    	 var we_skill_end=setInterval(function (){
											if (finish){
												finish=false;
												clearInterval(we_skill_end);
												
												if (b.HP <= 0) {
													deadEvent(a,b);
													we_skill_end = setInterval(function() {
														if (finish) {
															finish = false;
															clearInterval(we_skill_end);
															if (judeEnd()) {
																//---恢复精神力---
															    recoverSpirit();
																//-----------
															    enemyRoundShow();
																end = true;
																ai = true;
																setTimeout(enemysAction, 500);
															}else{ end=false;}
														}
													});
												}else{if (judeEnd()) {
													          	//---恢复精神力---
															    recoverSpirit();
																//-----------
																enemyRoundShow();
																end = true;
																ai = true;
																setTimeout(enemysAction, 500);
															}else{ end=false;}}
											}
										});
    }

	}

    if(a instanceof roleInfo){
          normalAttack(a,b); 
          att_end = setInterval(function() {
          if (finish) {
            finish = false;
            clearInterval(att_end);
			
            if (b.HP > 0) {
                normalAttack(b,a);
                var t1 = setInterval(function() {
                    if (finish) {
                        finish = false;
                        clearInterval(t1);
						
                        if (a.HP > 0) {
                            
                            //var n = Math.floor(Math.random() * 100) + 1; 
							var n=0;
                            if (n <= skillSuccess) { //
							    realHeJiuCuiHunShu(a,b);
								
                            } 	
							else{
							
                                failAlert("发动失败",a);
									a.dy = 240;
									if (judeEnd()) {
										//-
										 recoverSpirit();
										//-----------
										setTimeout(enemyRoundShow,1500);
										end = true;
										ai = true;
										setTimeout(enemysAction,3000);
									}
									else{ end=false;}
                            }
                        } 
						
						else {
                            deadEvent(null,a);
                            var t7 = setInterval(function() {
                                if (finish) {
                                    finish = false;
                                    clearInterval(t7);
                                    if (!judgeOver()) {
                                        if (judeEnd()) {
											//--
											 recoverSpirit();
											//-----------
											enemyRoundShow();
                                            end = true;
                                            ai = true;
                                            enemysAction();
                                        }else{end=false;}
                                    } 
									else {game_over_page();}
                                }
                            });//
                        }
                    }//
                });//
            }
			//
			else {
                a.dy = 240;
                deadEvent(a,b);
                var t8 = setInterval(function() {
                    if (finish) {
                        finish = false;
                        clearInterval(t8);
                        if (judeEnd()) {
								//--
								recoverSpirit();
								//-----------
								enemyRoundShow();
                            end = true;
                            ai = true;
                            setTimeout(enemysAction);
                        }else{ end=false;}
                        
                    }
                });//
            }
        }//
    });//
    }else{
    	realHeJiuCuiHunShu(a,b);
    }
}
//燃烧灵气
function RanShaoLingQi(){
	var thp = rolesArray[rolesIndex].HP;
    rolesArray[rolesIndex].HP += skillVar;
    if (rolesArray[rolesIndex].HP > rolesArray[rolesIndex].fullHP) {
        rolesArray[rolesIndex].HP = rolesArray[rolesIndex].fullHP;
    }
    thp = rolesArray[rolesIndex].HP - thp;
    var s = "HP+" + thp;
    var t = new text(s,rolesArray[rolesIndex].mapX, rolesArray[rolesIndex].mapY + 1 / 2 * rpx, rolesArray[rolesIndex].sx, rolesArray[rolesIndex].sy + 1 / 2 * rpx, "rgb(0,255,0)", "bold 30px FangSong");
    var hx = new Image();
    hx.src = effect;
    
    var RecoverShow = new pic(rolesArray[rolesIndex].mapX - rpx,rolesArray[rolesIndex].mapY - rpx,rolesArray[rolesIndex].sx - rpx, rolesArray[rolesIndex].sy - rpx, 3 * rpx, 3 * rpx, 0, 0, 350, 350, hx);
    attackShow.push(t);
    attackShow.push(RecoverShow);
    t1 = setInterval(function() {
        t.mapY--;
        if (RecoverShow.dx < 4900) {
            RecoverShow.dx += 350;
        } else {
            RecoverShow.dx = 0;
        }

        if (t.mapY == rolesArray[rolesIndex].mapY) {
        	rolesArray[rolesIndex].dy = 240;
        	finish = true;
            clearInterval(t1);
            clearArray(attackShow);
        }
    },
    75);
    var we_skill_end=setInterval(function (){
    	if (finish){
		finish=false;
		clearInterval(we_skill_end);
    	if (judeEnd()) {
		//---恢复精神力---
		recoverSpirit();
		//-----------
		enemyRoundShow();
		end = true;
		ai = true;
		setTimeout(enemysAction, 500);
	    }else{ end=false;}
        }//finish
                     });
}
//天摇地动
function TianYaoDiDong(a,b){//a attack b

    function realTianYaoDiDong(a,b){

           a.MP -= skilltmp;
           if(a instanceof roleInfo){
           	enemyStopMove = true;
           }
           else{
           	roleStopMove = true;
           }
           stopCount = skillVar;

  //显示半身像
  var tVar1 = Math.floor(rpx * b.HP / b.fullHP) + 1;
  var hp = new rectangle(b.mapX, b.mapY - 9,b.mapX, b.mapY - 9, tVar1, 5, "rgb(0,255,0)");
  var hpBox = new rectangle(b.mapX, b.mapY - 10,b.mapX, b.mapY - 10, rpx, 7, "rgb(0,0,0)");
  var e = new Image();
  e.src = effect;
  var skillShow = new pic(b.mapX - rpx - 6, b.mapY - rpx - 15,b.mapX - rpx - 6, b.mapY - rpx - 15, 3 * rpx, 3 * rpx, 0, 0, 350, 350, e);
  var attackText = new text("敌人无法移动" + skillVar + "回合",b.mapX + rpx / 4 - 30, b.mapY + rpx / 2, b.mapX + rpx / 4 - 30, b.mapY + rpx / 2, "rgb(255,0,0)", "bold 5px FangSong");
  var h = new Image();
  h.src = a.halfBody
  var hs = new picture(48*5-mapMovX, 48*4-mapMovY,48*5-mapMovX, 48*4-mapMovY, 4 * rpx, 4 * rpx, h);
  attackShow.push(hs);

  var t2 = setInterval(function() {
      var sn = new text(skillName.charAt(countInterval),  hs.sx -mapMovX+ hs.swidth + countInterval * rpx, hs.sy -mapMovY+ hs.sheight / 2 + rpx,hs.sx -mapMovX+ hs.swidth + countInterval * rpx, hs.sy -mapMovY+ hs.sheight / 2 + rpx, "rgb(153,50,204)", "bold 40px KaiTi");
      attackShow.push(sn);
      countInterval++;
      if (countInterval == skillName.length + 1) {
           countInterval = 0;
           clearInterval(t2);
           clearArray(attackShow);
           finish = true;
       }
     },
  500);
  var t3=setInterval(function(){
      if (finish) {
	        clearInterval(t3);
            finish = false;
            attackShow.push(attackText);
            attackShow.push(skillShow);
			var t4 = setInterval(function() {
                     attackText.mapY--;
                     if (skillShow.dx < 4900) {
                          skillShow.dx += 350;
                     } else {
                          skillShow.dx = 0;
                     }
                    if (attackText.mapY == b.mapY) {
                         clearInterval(t4);
                         a.dy = 240;
                         clearArray(attackShow);
					     finish=true;
                      }
                      },
            50);//t4
	  }//finish
  });//t3

    if(judeEnd()){//boss主动发动技能
    	 var boss_skill_end=setInterval(function(){
						if(finish){
							clearInterval(boss_skill_end);
							finish = false;
							//如果我方在BOSS的秘技攻击下还活着
							if (b.HP > 0) {
							enemyIndex++;
							if (enemyIndex < enemysArray.length) {
								setTimeout(enemysAction, 2000);
							} else {
								enemyIndex = 0;
								count++;
								setTimeout(dialogShow, 2000);
								ai = false;
							}// if (enemyIndex < enemysArray.length) 
							}
							//如果我方在BOSS的秘技攻击下死了															
							}//finish
		});//var boss_skill_end
    }
    else{//我方主动攻击boss，boss发动技能
    	 var we_skill_end=setInterval(function (){
						if (finish){											
						clearInterval(we_skill_end);
						finish=false;
						b.dy = 240;
						if (judeEnd()) {
						recoverSpirit();
						setTimeout(enemyRoundShow,500);
						end = true;
						ai = true;
						setTimeout(enemysAction, 2500);
						}else{ end=false;}
					}
			});
    }

	}

    if(a instanceof roleInfo){
          normalAttack(a,b); 
          att_end = setInterval(function() {
          if (finish) {
            finish = false;
            clearInterval(att_end);
			
            if (b.HP > 0) {
                normalAttack(b,a);
                var t1 = setInterval(function() {
                    if (finish) {
                        finish = false;
                        clearInterval(t1);
						
                        if (a.HP > 0) {
                            
                            var n = Math.floor(Math.random() * 100) + 1; 
							//var n=0;
                            if (n <= skillSuccess) { //
							    realTianYaoDiDong(a,b);
								
                            } 	
							else{
							
                                failAlert("发动失败",a);
									a.dy = 240;
									if (judeEnd()) {
										//-----------
										 recoverSpirit();
										//-----------
										setTimeout(enemyRoundShow,1500);
										end = true;
										ai = true;
										setTimeout(enemysAction,3000);
									}
									else{ end=false;}
                            }
                        } 
						
						else {
                            deadEvent(null,a);
                            var t7 = setInterval(function() {
                                if (finish) {
                                    finish = false;
                                    clearInterval(t7);
                                    if (!judgeOver()) {
                                        if (judeEnd()) {
											//--
											 recoverSpirit();
											//-----------
											enemyRoundShow();
                                            end = true;
                                            ai = true;
                                            enemysAction();
                                        }else{end=false;}
                                    } 
									else {game_over_page();}
                                }
                            });//
                        }
                    }//
                });//
            }
			//
			else {
                a.dy = 240;
                deadEvent(a,b);
                var t8 = setInterval(function() {
                    if (finish) {
                        finish = false;
                        clearInterval(t8);
                        if (judeEnd()) {
								//--
								recoverSpirit();
								//-----------
								enemyRoundShow();
                            end = true;
                            ai = true;
                            setTimeout(enemysAction);
                        }else{ end=false;}
                        
                    }
                });//
            }
        }
    });
    }else{
    	realTianYaoDiDong(a,b);
    }

}
//万年远古冰魂决
function WanNianYuanGuBingHunJue(a,b){//a attack b

    function realWanNianYuanGuBingHunJue(a,b){

           a.pow -= powertmp;
		   b.HP -= powerVar;
		   if(a instanceof roleInfo){
           	enemyStopMove = true;
           }
           else{
           	roleStopMove = true;
           }
           stopCount = 1;

  //显示半身像
  var tVar1 = Math.floor(rpx * b.HP / b.fullHP) + 1;
  var hp = new rectangle(b.mapX, b.mapY - 9,b.mapX, b.mapY - 9, tVar1, 5, "rgb(0,255,0)");
  var hpBox = new rectangle(b.mapX, b.mapY - 10,b.mapX, b.mapY - 10, rpx, 7, "rgb(0,0,0)");
  var e = new Image();
  e.src = effect;
  var powerShow = new pic(b.mapX - rpx - 6, b.mapY - rpx - 15,b.mapX - rpx - 6, b.mapY - rpx - 15, 3 * rpx, 3 * rpx, 0, 0, 350, 350, e);
  var attackText = new text("-" + powerVar,b.mapX + rpx / 4, b.mapY + rpx / 2, b.mapX + rpx / 4, b.mapY + rpx / 2, "rgb(255,0,0)", "bold 30px FangSong");
  var h = new Image();
  h.src = a.halfBody;
  var hs = new picture(48*5-mapMovX, 48*4-mapMovY,48*5-mapMovX, 48*4-mapMovY, 4 * rpx, 4 * rpx, h);
  attackShow.push(hs);

  var t2 = setInterval(function() {
      var sn = new text(powerName.charAt(countInterval),  hs.sx -mapMovX+ hs.swidth + countInterval * rpx, hs.sy -mapMovY+ hs.sheight / 2 + rpx,hs.sx -mapMovX+ hs.swidth + countInterval * rpx, hs.sy -mapMovY+ hs.sheight / 2 + rpx, "rgb(153,50,204)", "bold 40px KaiTi");
      attackShow.push(sn);
      countInterval++;
      if (countInterval == powerName.length + 1) {
           countInterval = 0;
           clearInterval(t2);
           clearArray(attackShow);
           finish = true;
       }
     },
  500);//t2
  var t3=setInterval(function(){
      if (finish) {
	        clearInterval(t3);
            finish = false;
            attackAction(a);
            flicker(b);
            attackShow.push(attackText);
            attackShow.push(powerShow);
			var t4 = setInterval(function() {
                     attackText.mapY--;
                     if (powerShow.dx < 4900) {
                          powerShow.dx += 350;
                     } else {
                          powerShow.dx = 0;
                     }
                    if (attackText.mapY == b.mapY) {
                         clearInterval(t4);
                         a.dy = 240;
                         clearArray(attackShow);
					     //finish=true;
                      }
                      },
            50);//t4
	        if (hp.swidth > 0) {
                hpShow.push(hpBox);
                hpShow.push(hp);
                var tVar2 = Math.floor(rpx * powerVar / b.fullHP) + 1;
                var t5 = setInterval(function() {
                          hp.swidth--;
                          countInterval++;
                          if (countInterval == tVar2 || hp.swidth <= 0) {
                              countInterval = 0;
                              clearInterval(t5);
                              clearArray(hpShow);
							  finish=true;
                          }
                       },
                50);//t5
            }// if (hp.swidth > 0) 
	  }//finish
  });//t3

    if(judeEnd()){
    	 var boss_power_end=setInterval(function(){
																if(finish){
																clearInterval(boss_power_end);
																finish = false;
																//如果我方在BOSS的秘技攻击下还活着
																if (b.HP > 0) {
																enemyIndex++;
																if (enemyIndex < enemysArray.length) {
																	setTimeout(enemysAction, 2000);
																	} else {
																		enemyIndex = 0;
																		count++;
																		setTimeout(dialogShow, 2000);
																		ai = false;
																	}// if (enemyIndex < enemysArray.length) 
																}
																//如果我方在BOSS的秘技攻击下死了
																else{
																deadEvent(null,b);
																var tm3 = setInterval(function() {
																	if (finish) {
																		finish = false;
																		clearInterval(tm3);
																		enemyIndex++;
																		if (enemyIndex < enemysArray.length) {
																			setTimeout(enemysAction, 2000);
																		} else {
																			enemyIndex = 0;
																			count++;
																			setTimeout(dialogShow, 2000);
																			ai = false;
																		}
																	}//finish
																}); //tm3   
															}//else
														}//finish
		});//var boss_skill_end
    }
    else{
    	 var we_power_end=setInterval(function (){
											if (finish){											
												clearInterval(we_power_end);
												finish=false;
												
												if (b.HP <= 0) {
													deadEvent(a,b);
													we_power_end = setInterval(function() {
														if (finish) {
															finish = false;
															clearInterval(we_power_end);
															if (judeEnd()) {
																//---恢复精神力---
															    recoverSpirit();
																//-----------
															    enemyRoundShow();
																end = true;
																ai = true;
																setTimeout(enemysAction, 500);
															}else{ end=false;}
														}
													});
												}else{
													b.dy = 240;
													if (judeEnd()) {
													          	//---恢复精神力---
															    recoverSpirit();
																//-----------
																enemyRoundShow();
																end = true;
																ai = true;
																setTimeout(enemysAction, 500);
															}else{ end=false;}}
											}
										});
    }

	}//real penhuolong

    if(a instanceof roleInfo){
          normalAttack(a,b); 
          att_end = setInterval(function() {
          if (finish) {
            finish = false;
            clearInterval(att_end);
			
            if (b.HP > 0) {
                normalAttack(b,a);
                var t1 = setInterval(function() {
                    if (finish) {
                        finish = false;
                        clearInterval(t1);
						
                        if (a.HP > 0) {
                            
                            var n = Math.floor(Math.random() * 100) + 1; 
							//var n=0;
                            if (n <= skillSuccess) { //
							    realWanNianYuanGuBingHunJue(a,b);
								
                            } 	
							else{
							
                                failAlert("发动失败",a);
									a.dy = 240;
									if (judeEnd()) {
										//-
										 recoverSpirit();
										//-----------
										setTimeout(enemyRoundShow,1500);
										end = true;
										ai = true;
										setTimeout(enemysAction,3000);
									}
									else{ end=false;}
                            }
                        } 
						
						else {
                            deadEvent(null,a);
                            var t7 = setInterval(function() {
                                if (finish) {
                                    finish = false;
                                    clearInterval(t7);
                                    if (!judgeOver()) {
                                        if (judeEnd()) {
											//--
											 recoverSpirit();
											//-----------
											enemyRoundShow();
                                            end = true;
                                            ai = true;
                                            enemysAction();
                                        }else{end=false;}
                                    } 
									else {game_over_page();}
                                }
                            });//
                        }
                    }//
                });//
            }
			//
			else {
                a.dy = 240;
                deadEvent(a,b);
                var t8 = setInterval(function() {
                    if (finish) {
                        finish = false;
                        clearInterval(t8);
                        if (judeEnd()) {
								//--
								recoverSpirit();
								//-----------
								enemyRoundShow();
                            end = true;
                            ai = true;
                            setTimeout(enemysAction);
                        }else{ end=false;}
                        
                    }
                });//
            }
        }//
    });//
    }else{
    	realWanNianYuanGuBingHunJue(a,b);
    }

}
function ZhaoHunDaFa(enemy,obj) {

    var h = new Image();
                                h.src = obj.halfBody;
                                var hs = new picture(48*5-mapMovX, 48*4-mapMovY,48*5-mapMovX, 48*4-mapMovY, 4 * rpx, 4 * rpx, h);
								attackShow.push(hs);
								//覆盖层
								FuGaiCeng(enemy,obj);
                                var t2 = setInterval(function() {
                                	finish = false;
                                    var sn = new text(powerName.charAt(countInterval), hs.sx-mapMovX + hs.swidth + countInterval * rpx, hs.sy-mapMovY + hs.sheight / 2 + rpx,hs.sx-mapMovX + hs.swidth + countInterval * rpx, hs.sy-mapMovY + hs.sheight / 2 + rpx, "rgb(255,255,255)", "bold 40px KaiTi");
                                    attackShow.push(sn);                               
                                    countInterval++;
                                    if (countInterval == powerName.length + 1) {
                                        countInterval = 0;
                                        clearInterval(t2);
                                        clearArray(attackShow);
                                        clearArray(shadowShow);
                                        finish=true;
                                    }
								}, 
								500);//t2结束
	var aaaa=100;
	//判断只要是活着的队友即可；----------------
	
	var a=obj.mapX/48;
	var b=obj.mapY/48;
	var pos=[a,b];//主角的左上角/48的坐标
	var aa=GetRound(pos);//得到主角上下左右的四个点的数组,右下左上的顺序
	//判断1.是否和障碍物重合，2.是否有敌人在这个位置，3.是否有队友在这个位置上，4.是否在画布范围内 然后复活
	
	for(var i=0;i<aa.length;i++){
		var t=aa[i].split(",");//split() 方法用于把一个字符串分割成字符串数组。
		console.log("t0"+t[0]+" ");
		console.log("t1"+t[1]+" ");
		t[0]=parseInt(t[0]);
		t[1]=parseInt(t[1]);
	  if(IsObstacle(aa[i])||IsOutScreen([t[0],t[1]])||IsEnemyHere([t[0],t[1]])||IsBuddyHere([t[0],t[1]])){
	 console.log("i是");
         if(i!=3){continue;}
		 else {noEmptyPlace();}	 
      
	  }
      else{		
	       for(var ii=0;ii<rolesArray.length;ii++){
		      if( rolesArray[ii].name==deadArray[tpp-1].name){
				   rolesArray[ii].mapX=t[0]*rpx;
				   rolesArray[ii].mapY=t[1]*rpx;
				   rolesArray[ii].sx=rolesArray[ii].mapX;
				   rolesArray[ii].sy=rolesArray[ii].mapY;
				   rolesArray[ii].dy=240;
				   rolesArray[ii].sh=rpx;
				   rolesArray[ii].dh=rpx;				   
			       rolesArray[ii].HP=powerVar;
				   aaaa=ii;
		       }
	       }
		   //处理后事
		   deadArray.splice(tpp-1, 1);//死亡数组删除那个复活的对象
		   break;
	  }//else
	  
	}//for

	var RecoverShow = new pic(rolesArray[aaaa].mapX - rpx, rolesArray[aaaa].mapY - rpx,rolesArray[aaaa].sx - rpx, rolesArray[aaaa].sy - rpx, 3 * rpx, 3 * rpx, 0, 0, 350, 350, getAlive);
	attackShow.push(RecoverShow);	
	var lt = setInterval(function() {	if(finish)   {           
	if (RecoverShow.dx < 4900) {RecoverShow.dx += 350;} 
	else {RecoverShow.dx = 0;finish=false;}	}					
	},75);
	setTimeout(function (){
	//	if(finish){
	               clearInterval(lt);
	               clearArray(attackShow);
	   			   obj.dy = 240;
	 			   if (judeEnd()) {
					//---恢复精神力---
					recoverSpirit();
					//-----------
					enemyRoundShow();
					end = true;
					ai = true;
					setTimeout(enemysAction, 2000);
	  				}else{ end=false;}	  				
	  			//    }//finish
                    }, 2000);
         
				
}
function PSoulAttack() {
	//保存敌人的下标
    var tIndex;
    for (var i = 0; i < enemysArray.length; i++) {
       if (Math.floor((x-mapMovX) / rpx) * rpx== enemysArray[i].mapX && Math.floor((y-mapMovY) / rpx) * rpx== enemysArray[i].mapY) {
               tIndex = i;	  
       }
    }
	//我方先普通攻击敌方
    normalAttack(rolesArray[rolesIndex], enemysArray[tIndex]); //1号位，我方先普通攻击敌方
    
	//对我方先普通攻击敌方侦听
    att_end = setInterval(function() {console.log("我方角色普通攻击敌人后的finish："+finish+"   ");
        if (finish) {//1号位结束后，finish=true，4号位
            finish = false;
            clearInterval(att_end);
			//如果敌人还活着
            if (enemysArray[tIndex].HP > 0) {
                normalAttack(enemysArray[tIndex], rolesArray[rolesIndex]);//2号位,如果敌人还活着，敌人普通攻击我方
                var t1 = setInterval(function() {
                    if (finish) {//2号位结束后，finish=true，3号位
                        finish = false;
                        clearInterval(t1);
						//如果我方还活着
                        if (rolesArray[rolesIndex].HP > 0) {
                            var tVar1 = Math.floor(rpx * enemysArray[tIndex].HP / enemysArray[tIndex].fullHP) + 1;
                            var n = Math.floor(Math.random() * 100) + 1; //产生1---100随机数
							//var n=100;
                            if (n <= powerSuccess) { //随机数<怒技成功率
								console.log("进入怒攻击成功"); 
                                var hp = new rectangle(enemysArray[tIndex].mapX, enemysArray[tIndex].mapY - 9,enemysArray[tIndex].sx, enemysArray[tIndex].sy - 9, tVar1, 5, "rgb(0,255,0)");
                                var hpBox = new rectangle(enemysArray[tIndex].mapX, enemysArray[tIndex].mapY - 10,enemysArray[tIndex].sx, enemysArray[tIndex].sy - 10, rpx, 7, "rgb(0,0,0)");
								var e = new Image();
                                e.src = effect;
                                var powerShow = new pic(enemysArray[tIndex].mapX - rpx - 6, enemysArray[tIndex].mapY - rpx - 15,enemysArray[tIndex].mapX - rpx - 6, enemysArray[tIndex].mapY - rpx - 15, 3 * rpx, 3 * rpx, 0, 0, 350, 350, e);
                                var attackText = new text("-" + powerVar, enemysArray[tIndex].mapX + rpx / 4, enemysArray[tIndex].mapY + rpx / 2,enemysArray[tIndex].mapX + rpx / 4, enemysArray[tIndex].mapY + rpx / 2, "rgb(255,0,0)", "bold 30px FangSong");
                                var h = new Image();
                                h.src = rolesArray[rolesIndex].halfBody;
                                var hs = new picture(48*5-mapMovX, 48*4-mapMovY,48*5-mapMovX, 48*4-mapMovY, 4 * rpx, 4 * rpx, h);
								attackShow.push(hs);
								//覆盖层
								FuGaiCeng(enemysArray[tIndex],rolesArray[rolesIndex]);
                                var t2 = setInterval(function() {
                                    var sn = new text(powerName.charAt(countInterval), hs.sx-mapMovX + hs.swidth + countInterval * rpx, hs.sy-mapMovY + hs.sheight / 2 + rpx,hs.sx-mapMovX + hs.swidth + countInterval * rpx, hs.sy-mapMovY + hs.sheight / 2 + rpx, "rgb(255,255,255)", "bold 40px KaiTi");
                                    attackShow.push(sn);
                                
                                    countInterval++;
                                    if (countInterval == powerName.length + 1) {
                                        countInterval = 0;
                                        clearInterval(t2);
                                        clearArray(attackShow);
                                        finish = true;
                                    }
								}, 
								500);//t2结束
								var t3 = setInterval(function() {
                                    if (finish) {
                                        clearInterval(t3);
                                        finish = false;
                                        attackAction(rolesArray[rolesIndex]);
                                        flicker(enemysArray[tIndex]);
                                        attackShow.push(attackText);
                                        attackShow.push(powerShow);
                                        var t4 = setInterval(function() {
											attackText.mapY--;
                                            if (powerShow.dx < 4900) {powerShow.dx += 350; } 
											else {powerShow.dx = 0;}
                                           // drawAll();
                                            if (attackText.mapY== enemysArray[tIndex].mapY) {
                                                clearInterval(t4);
                                                rolesArray[rolesIndex].dy = 240;
                                                clearArray(attackShow);
												finish=true;
                                            }
                                        },
                                        50);//t4结束
                                        if (hp.swidth > 0) {
                                            hpShow.push(hpBox);
                                            hpShow.push(hp);
                                            var tVar2 = Math.floor(rpx * powerVar / enemysArray[tIndex].fullHP) + 1;
                                            var t5 = setInterval(function() {
                                                hp.swidth--;
                                                countInterval++;
                                                if (countInterval == tVar2 || hp.swidth == 0) {
                                                    countInterval = 0;
                                                    clearInterval(t5);
                                                    clearArray(hpShow);
													clearArray(shadowShow);
													
                                                }
                                            },
                                            50);//t5结束
                                        }//  if (hp.swidth > 0) 结束
										var tb=setInterval(function(){
											if (finish){
												finish=false;
												clearInterval(tb);
												enemysArray[tIndex].HP -= powerVar;
												if (enemysArray[tIndex].HP <= 0) {
													deadEvent(rolesArray[rolesIndex],enemysArray[tIndex]);
													att_end = setInterval(function() {
														if (finish) {
															finish = false;
															clearInterval(att_end);			
															if (judeEnd()) 
															{   //---恢复精神力---
															    recoverSpirit();
																//-----------
																enemyRoundShow();
																end = true;
																ai = true;
																setTimeout(enemysAction, 500);
															}
															else{end=false;}
														}
													});
												}
												else{
														 if (judeEnd()){
																   recoverSpirit();
																   enemyRoundShow();
																   end = true;
																   ai = true;
																   setTimeout(enemysAction, 500);
																 }
														 else{end=false;}	
												}
											}
										});//tb结束
                                       
                                    }
                                });//t3结束
                            } 
							//如果产生的随机数>powerSuccess,发动失败
							else{
								console.log("怒技使用失败");
                                failAlert("怒技使用失败！", rolesArray[rolesIndex]);
									rolesArray[rolesIndex].dy = 240;
									if (judeEnd()) {
										//---恢复精神力---
										 recoverSpirit();
										//-----------
										setTimeout(enemyRoundShow,1500);
										end = true;
										ai = true;
										setTimeout(enemysAction,3000);
									}
									else{ end=false;}
                            }
                        } 
						//如果我方HP<0,死了
						else {
                            deadEvent(null,rolesArray[rolesIndex]);
                            var t7 = setInterval(function() {
                                if (finish) {
                                    finish = false;
                                    clearInterval(t7);
                                    if (!judgeOver()) {
                                        if (judeEnd()) {
											//---恢复精神力---
											 recoverSpirit();
											//-----------
											enemyRoundShow();
                                            end = true;
                                            ai = true;
                                            enemysAction();
                                        }else{end=false;}
                                    } 
									else {game_over_page();}
                                }
                            });//结束
                        }
                    }//3号位结束
                });//t1结束
            }
			//敌人死了
			else {
                rolesArray[rolesIndex].dy = 240;
                deadEvent(rolesArray[rolesIndex],enemysArray[tIndex]);
                var t8 = setInterval(function() {
                    if (finish) {
                        finish = false;
                        clearInterval(t8);
                        if (judeEnd()) {
								//---恢复精神力---
								recoverSpirit();
								//-----------
								enemyRoundShow();
                            end = true;
                            ai = true;
                            setTimeout(enemysAction);
                        }else{ end=false;}
                        //drawAll();
                    }
                });//t8结束
            }
        }//4号位结束
    });//t结束
}
//--------------------------------------------------------------------------------------------------------------
function SSoulKill() {
	//找到敌人的下标
    var tIndex;
    for (var i = 0; i < enemysArray.length; i++) {
       if (Math.floor((x-mapMovX) / rpx) * rpx== enemysArray[i].mapX && Math.floor((y-mapMovY) / rpx) * rpx== enemysArray[i].mapY) {
               tIndex = i;	  
       }
    }
	//我方普通攻击敌人
    normalAttack(rolesArray[rolesIndex], enemysArray[tIndex]);
	//对我方普通攻击敌人进行侦听
    att_end = setInterval(function() {
	   console.log("对我方普通攻击敌人进行侦听");
        if (finish) {
            finish = false;
            clearInterval(att_end);
			//如果敌人还活着
            if (enemysArray[tIndex].HP > 0) {
				//敌人普通攻击我方
                normalAttack(enemysArray[tIndex], rolesArray[rolesIndex]);
				//对敌人普通攻击我方进行侦听
                att_end = setInterval(function() {
                    if (finish) {
                        finish = false;
                        clearInterval(att_end);
						//如果我方还活着
                        if (rolesArray[rolesIndex].HP > 0) {
							//获得1---100的随机数
                            var n = Math.floor(Math.random() * 100) + 1;
							//发动秘技
                            if (n <= skillSuccess) {	
                                var tVar1 = Math.floor(rpx * enemysArray[tIndex].HP / enemysArray[tIndex].fullHP) + 1;
                                var hp = new rectangle(enemysArray[tIndex].mapX, enemysArray[tIndex].mapY - 9,enemysArray[tIndex].sx, enemysArray[tIndex].sy - 9, tVar1, 5, "rgb(0,255,0)");
                                var hpBox = new rectangle(enemysArray[tIndex].mapX, enemysArray[tIndex].mapY - 10,enemysArray[tIndex].sx, enemysArray[tIndex].sy - 10, rpx, 7, "rgb(0,0,0)");
                                var e = new Image();
                                e.src = effect;
                                var skillShow = new pic(enemysArray[tIndex].mapX - rpx - 6, enemysArray[tIndex].mapY - rpx - 15,enemysArray[tIndex].mapX - rpx - 6, enemysArray[tIndex].mapY - rpx - 15, 3 * rpx, 3 * rpx, 0, 0, 350, 350, e);
                                var attackText = new text("-" + skillVar, enemysArray[tIndex].mapX + rpx / 4, enemysArray[tIndex].mapY + rpx / 2,enemysArray[tIndex].mapX + rpx / 4, enemysArray[tIndex].mapY + rpx / 2, "rgb(255,0,0)", "bold 30px FangSong");
                                var h = new Image();
                                h.src = rolesArray[rolesIndex].halfBody;
                                var hs = new picture(48*5-mapMovX, 48*4-mapMovY,48*5-mapMovX, 48*4-mapMovY, 4 * rpx, 4 * rpx, h);
								attackShow.push(hs);
                        
                                var t2 = setInterval(function() {
                                    var sn = new text(skillName.charAt(countInterval),hs.sx -mapMovX+ hs.swidth + countInterval * rpx, hs.sy -mapMovY+ hs.sheight / 2 + rpx, hs.sx-mapMovX + hs.swidth + countInterval * rpx, hs.sy-mapMovY + hs.sheight / 2 + rpx, "rgb(153,50,204)", "bold 40px KaiTi");
                                    attackShow.push(sn);
                                 
                                    countInterval++;
                                    if (countInterval == skillName.length + 1) {
                                        countInterval = 0;
                                        clearInterval(t2);
                                        clearArray(attackShow);
                                        finish = true;
                                    }
                                },
                                500);
								var t3 = setInterval(function() {
                                    if (finish) {
                                        clearInterval(t3);
                                        finish = false;
                                        attackAction(rolesArray[rolesIndex]);
                                        flicker(enemysArray[tIndex]);
                                        attackShow.push(attackText);
                                        attackShow.push(skillShow);
                                        var t4 = setInterval(function() {
                                            attackText.mapY--;
                                            if (skillShow.dx < 4900) {
                                                skillShow.dx += 350;
                                            } else {
                                                skillShow.dx = 0;
                                            }
                                           
                                            if (attackText.mapY == enemysArray[tIndex].mapY) {
                                                clearInterval(t4);
                                                rolesArray[rolesIndex].dy = 240;
                                                clearArray(attackShow);
												finish=true;
                                            }
                                        },
                                        50);
                                        if (hp.swidth > 0) {
                                            hpShow.push(hpBox);
                                            hpShow.push(hp);
                                            var tVar2 = Math.floor(rpx * skillVar / enemysArray[tIndex].fullHP) + 1;
                                            var t5 = setInterval(function() {
                                                hp.swidth--;
                                                countInterval++;
                                               
                                                if (countInterval == tVar2 || hp.swidth <= 0) {
                                                    countInterval = 0;
                                                    clearInterval(t5);
                                                    clearArray(hpShow);
                                                }
                                            },
                                            50);
                                        }
										att_end=setInterval(function (){
											if (finish){
												finish=false;
												clearInterval(att_end);
												enemysArray[tIndex].HP -= skillVar;
												if (enemysArray[tIndex].HP <= 0) {
													deadEvent(rolesArray[rolesIndex],enemysArray[tIndex]);
													att_end = setInterval(function() {
														if (finish) {
															finish = false;
															clearInterval(att_end);
															if (judeEnd()) {
																//---恢复精神力---
															    recoverSpirit();
																//-----------
															    enemyRoundShow();
																end = true;
																ai = true;
																setTimeout(enemysAction, 500);
															}else{ end=false;}
														}
													});
												}else{if (judeEnd()) {
													          	//---恢复精神力---
															    recoverSpirit();
																//-----------
																enemyRoundShow();
																end = true;
																ai = true;
																setTimeout(enemysAction, 500);
															}else{ end=false;}}
											}
										});
                                       
                                    }
                                });
                            } else
							//秘技发动失败
							{
                                failAlert("秘技使用失败！", rolesArray[rolesIndex]);
                                rolesArray[rolesIndex].dy = 240;
                                if (judeEnd()) {
								//---恢复精神力---
								 recoverSpirit();
								//-----------
										setTimeout(enemyRoundShow,1500);
										end = true;
										ai = true;
										setTimeout(enemysAction,3000);
                                }else{end=false;}
                            }
                        } else 
						//如果我方死了
						{
                            deadEvent(null,rolesArray[rolesIndex]);
                            var t7 = setInterval(function() {
                                if (finish) {
                                    finish = false;
                                    clearInterval(t7);
                                    if (!judgeOver()) {
                                        if (judeEnd()) {
												//---恢复精神力---
												 recoverSpirit();
												//-----------
												enemyRoundShow();
                                            end = true;
                                            ai = true;
                                            enemysAction();
                                        }else{end=false;}
                                    } else {
                               
									 game_over_page();
                                    }
                                }
                            });
                        }
                        //end=false;
                       
                    }
                });
            } else
			//如果敌人死了
			{
                rolesArray[rolesIndex].dy = 240;
                deadEvent(rolesArray[rolesIndex],enemysArray[tIndex]);
                att_end = setInterval(function() {
                    if (finish) {
                        finish = false;
                        clearInterval(att_end);
                        if (judeEnd()) {
								//---恢复精神力---
								recoverSpirit();
								//-----------
								enemyRoundShow();
                            end = true;
                            ai = true;
                            enemysAction();
                        }else{end=false;}
                    }
                });
            }
        }
    });
}
//------------------------------------------------------------------------------------------------------------------------------------
function normalAttack(a, b) {//a攻击b
	//普通攻击的音量
    putongattack.volume=0.1;
	//播放普通攻击
	putongattack.play();
	//获取随机数
    var n = Math.floor(Math.random() * 100) + 1; 
	//命中失误率 
    var x = a.errorRate; 
	//双倍暴击几率
    var y = a.doubleCRI; 
	//三倍暴击几率
    var z = a.tripleCRI;
	//定义一下产生的伤害值
    var hurt; 
	//血条长度
    var tVar1 = Math.floor(rpx * b.HP / b.fullHP) + 1;
    var attackText = new text("miss!", b.mapX + rpx / 4,b.mapY + rpx / 2,b.mapX + rpx / 4, b.mapY + rpx / 2, "rgb(255,0,0)", "bold 30px FangSong");
    var hp = new rectangle(b.mapX, b.mapY- 9,b.mapX, b.mapY - 9, tVar1, 5, "rgb(0,255,0)");
    var hpBox = new rectangle(b.mapX, b.mapY - 10,b.mapX, b.mapY - 10, rpx, 7, "rgb(0,0,0)");
	//动态的攻击效果
    attackAction(a); 
	//使被攻击者闪一下
    flicker(b);
	//-------------------------------------以下是怒攻击----------------------
    var m1 = Math.floor(Math.random() * 5) + 1; //获取1---6的随机数,给我方用的
	var m2 = Math.floor(Math.random() * 5) + 1; //获取1---6的随机数,给敌方BOSS用的
	//--------------------------------------以上是怒攻击----------------------
	if(weNormalAttackFail && (a instanceof roleInfo)){
		n = 0;
	}
	if(enemyNormalAttackFail && (b instanceof roleInfo) && (b.id == FeiYinShuangShenRoleId)){
		n = 0;
		enemyNormalAttackFailCount--;
		if(enemyNormalAttackFailCount == 0){enemyNormalAttackFail = false;}
	}
    if ((n <= x)||(a instanceof enemyInfo )&&((b instanceof roleInfo)&&(b.spiritShanBi==1)) ){//-闪避功能的模块-如果我方打开闪避功能了，当敌人攻击我方时，启动闪避--
		hurt = 0; //如果产生的随机数小于命中失误率，攻击MISS，
		weNormalAttackFail = false;
		if((a instanceof roleInfo)&&(a.spiritJueSha==1)){
			a.spiritJueSha=0;
		}else
		if((a instanceof enemyInfo )&&(b instanceof roleInfo)&&(b.spiritShanBi==1)){
		   b.spiritShanBi=0;
		   var js=new spirit();
				js.id=4;
				js.num=1;
				b.spirits.splice(3,0,js );//加回闪避这个精神力
				console.log("插回闪避这个精神力到数组");
		}
	}
    else {
        //----------------------怒值的随机添加--------------------------------------
		//我方打敌方的小兵
		if((a instanceof roleInfo )&&(b instanceof enemyInfo)&&(b.type==0)){
			if(a.pow<a.fullPow){
				a.pow+=m1;
				if(a.pow>=a.fullPow){a.pow=a.fullPow;}
				}
		}else
		//我方打敌方BOSS
		if((a instanceof roleInfo )&&(b instanceof enemyInfo)&&(b.type==1)){
		   if(a.pow<a.fullPow){ 
			   a.pow+=m1;
			   if(a.pow>=a.fullPow){a.pow=a.fullPow;}
			}
		   if(b.pow<b.fullPow){
		       b.pow+=m2;
			   if(b.pow>=b.fullPow){b.pow=b.fullPow;}

		   }
		}else
		//敌方小兵打我方
		if((a instanceof enemyInfo)&&(a.type==0)&&(b instanceof roleInfo)){
		  if(b.pow<b.fullPow){
		   b.pow+=m1;
		   if(b.pow>=b.fullPow){b.pow=b.fullPow;}
		  }
		 
		  //console.log("敌方小兵打我方,我方加怒值"+m1);
		}else
		//敌方BOSS打我方
		if((a instanceof enemyInfo)&&(a.type==1)&&(b instanceof roleInfo)){
		    if(b.pow<b.fullPow){
				b.pow+=m1;
				if(b.pow>=b.fullPow){b.pow=b.fullPow;}
			}
			if(a.pow<a.fullPow){
		       a.pow+=m2;
			   if(a.pow>=a.fullPow){a.pow=a.fullPow;}
			}
		}
        //----------------------怒值的随机添加结束--------------------------------------
		//如果产生的随机数在【命中失误率 ，命中失误率 +双倍暴击几率】
		if (n > x && n <= x + y) {
			//如果绝杀和神杀都发动了，则神杀覆盖绝杀
			if(((a.spiritJueSha==1)&&(a.spiritSheSha==1))||(a.spiritSheSha==1)){
			 	if(a.spiritJueSha==1){
					a.spiritJueSha=0;
					//把删掉的绝杀加回a.spirits数组
					var js=new spirit();
					js.id=2;
					js.num=1;
					//加回绝杀这个精神力
					a.spirits.splice(1,0,js );
				}
			    a.spiritSheSha=0;
			  	var js=new spirit();
				js.id=3;
				js.num=1;
				//加回神杀这个精神力
				a.spirits.splice(2,0,js );
                hurt = (a.ATK - b.DEF) * 6; 
				attackText.name = "Crit:-" + hurt;
			}else
			//因为使用绝杀造成的
			if(a.spiritJueSha==1){
				a.spiritJueSha=0;
				//把删掉的绝杀加回a.spirits数组
				var js=new spirit();
				js.id=2;
				js.num=1;
				//加回绝杀这个精神力
				a.spirits.splice(1,0,js );
			    hurt = (a.ATK - b.DEF) * 4; //4倍攻击
				attackText.name = "Crit:-" + hurt;
			}else
			//普通的2倍攻击
			{
				hurt = (a.ATK - b.DEF) * 2; //2倍攻击
				attackText.name = "Crit:-" + hurt;
		    }	
        } else 
		//如果产生的随机数在【命中失误率 ，命中失误率 +双倍暴击几率+三倍暴击几率】
		if (n > x + y && n <= x + y + z) {
			if(((a.spiritJueSha==1)&&(a.spiritSheSha==1))||(a.spiritSheSha==1)){
			 		if(a.spiritJueSha==1){
						a.spiritJueSha=0;
						//把删掉的绝杀加回a.spirits数组
						var js=new spirit();
						js.id=2;
						js.num=1;
						//加回绝杀这个精神力
						a.spirits.splice(1,0,js );
					}
			    a.spiritSheSha=0;
			    var js=new spirit();
				js.id=3;
				js.num=1;
				//加回神杀这个精神力
				a.spirits.splice(2,0,js );
				//因为同时使用了绝杀和神杀活着使用了神杀
                hurt = (a.ATK - b.DEF) * 9;
				attackText.name = "Crit:-" + hurt;
			}else
			if(a.spiritJueSha==1){//因为使用绝杀造成的
				a.spiritJueSha=0;
				//把删掉的绝杀加回a.spirits数组
				var js=new spirit();
				js.id=2;
				js.num=1;
				a.spirits.splice(1,0,js );//加回绝杀这个精神力
				
			    hurt = (a.ATK - b.DEF) * 6; //6倍攻击
				attackText.name = "Crit:-" + hurt;
			}else{
				hurt = (a.ATK - b.DEF) * 3; //3倍攻击
				attackText.name = "Crit:-" + hurt;
		    }
        } else
		if (n > x + y + z && n <= 100) {
			if(((a.spiritJueSha==1)&&(a.spiritSheSha==1))||(a.spiritSheSha==1)){
				if(a.spiritJueSha==1){
					a.spiritJueSha=0;
					//把删掉的绝杀加回a.spirits数组
					var js=new spirit();
					js.id=2;
					js.num=1;
					//加回绝杀这个精神力
					a.spirits.splice(1,0,js );
				}
			    a.spiritSheSha=0;
				var js=new spirit();
				js.id=3;
				js.num=1;
				//加回神杀这个精神力
				a.spirits.splice(2,0,js );
                hurt = (a.ATK - b.DEF) * 3; //2倍攻击
				attackText.name = "Crit:-" + hurt;
			}else
			//因为使用绝杀造成的
			if(a.spiritJueSha==1){
				a.spiritJueSha=0;
				//把删掉的绝杀加回a.spirits数组
				var js=new spirit();
				js.id=2;
				js.num=1;
				//加回绝杀这个精神力
				a.spirits.splice(1,0,js );
				recoverSpirit();
			    hurt = (a.ATK - b.DEF) * 2; //2倍攻击
				attackText.name = "Crit:-" + hurt;
			}
			else{
				 //普通攻击
				hurt = a.ATK - b.DEF;
				attackText.name = "-" + hurt;
			}
        }
	}

    var tVar2 = Math.floor(rpx * hurt / b.HP) + 1;
    b.HP -= hurt;
    attackShow.push(attackText);

    var at1 = setInterval(function() {
        attackText.mapY--;
        if (attackText.mapY == b.mapY) {
            clearInterval(at1);
            finish = true;
            clearArray(attackShow);
        }
    },
    50);
    if (hurt != 0 && hp.swidth > 0) {
        hpShow.push(hpBox);
        hpShow.push(hp);
        var at2 = setInterval(function() {
            hp.swidth--;
            countInterval++;
            if (countInterval == tVar2 || hp.swidth <= 0) {
                countInterval = 0;
                clearInterval(at2);
                clearArray(hpShow);
            }
        },
        50);
    }
}
//---------------------------------------------------------------------
function clearArray(arr) {
    while (arr.length > 0) arr.pop();
}
function clearArr(arr) {
    while (arr.length > 0) arr.pop();
}
//----------------闪2下------------------------------------------------------
function flicker(obj) {
    var tw = obj.sw;
    var th = obj.sh;
    function a() {
        obj.sw = tw;
        obj.sh = th;
       // drawAll();
    }
    function b() {
        obj.sw = 0;
        obj.sh = 0;
       // drawAll();
    }
    b();
    setTimeout(a, 100);
    setTimeout(b, 200);
    setTimeout(a, 300);

}
//------------------------------动态的攻击--------------------------------
function attackAction(obj) {
    obj.dy = 192;
    function a() {
        obj.dx = 0;
       // drawAll();
    }
    function b() {
        obj.dx = 48;
        //drawAll();
    }
    function c() {
        obj.dx = 0;
        obj.dy = 0;
       // drawAll();
    }
    b();
    setTimeout(a, 100);
    setTimeout(b, 200);
    setTimeout(a, 300);
    setTimeout(c, 400);
}
//------------------------------------------------------------------------------
function deadEvent(objAttack,objDead) {
	clearArray(everything2);
	//如果死亡的是敌人类型的
	if(objDead instanceof enemyInfo){
		//更新全队的钱
		teamMoney=teamMoney+objDead.money;
		roleUpIndex=objAttack.id-1;
		getSomething("金钱+"+objDead.money,objAttack);
		getSomething2("经验+"+objDead.EXP,objAttack);
        //增加秘技怒技
		if(objDead.skills.length>0 || objDead.powers.length>0)
			{
			for(var i=0;i<objDead.skills.length;i++)
				storehouse.addskills.push(objDead.skills[i]);			
			for(var j=0;j<objDead.powers.length;j++)
			    storehouse.addpowers.push(objDead.powers[j]);
			
			}
		//主角经验+敌人的经验
		rolesArray[roleUpIndex].EXP=parseInt(objDead.EXP)+parseInt(rolesArray[roleUpIndex].EXP);
		//如果主角当前经验比下一等级的经验值>=,requestLevel()
	    if(rolesArray[roleUpIndex].EXP>=rolesArray[roleUpIndex].nextEXP){requestLevel();}
	 }
	else{
		deadArray.push(objDead);
	}
    var dt = setInterval(function() {
        objDead.sh--;
        objDead.dh--;
        if (objDead.sh == 0) {
            clearInterval(dt);
          
            objDead.mapX = 2496;
            objDead.mapY = 0;
			objDead.dy=240;
			if(levelUpOk){
				aftLevelEvent(objAttack);             
			}
			else{
					if(isEnemyAllDead()&&(mapLevel==1||mapLevel==2||mapLevel==4||mapLevel==5||mapLevel==6||mapLevel==7||mapLevel==8||mapLevel==12||mapLevel==9||mapLevel==10)){
		                enemyTurn.pause();
						clearInterval(att_end);
						nextGuanKaOpen();
					}else if(isBossDead()&&mapLevel==3){//&&mapLevel==9&&mapLevel==10
						enemyTurn.pause();
               	        clearInterval(att_end);
				        nextGuanKaOpen();
						}
					else {finish=true;}
				}		
        }
    },
    80);
}