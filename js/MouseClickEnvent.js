/*
������¼�����
*///canvas.removeEventListener('click', cCheck, false);
function cCheck(e) {
	e.preventDefault();
	var touch = e.touches[0];
	startX = touch.pageX;    //�մ���ʱ������   
    startY = touch.pageY;   
    x = touch.pageX - canvas.offsetLeft;
    y = touch.pageY - canvas.offsetTop;
	console.log("x:   "+x+"Y:    "+y);
    tx = Math.floor(x / rpx) * rpx; //�����ʱ�ķ������Ͻǵ�x����
    ty = Math.floor(y / rpx) * rpx; //�����ʱ�������Ͻǵ�x����  

	
	if(nextloading){//������һ��
		console.log("������һ��");
		  if(IntoGuanKa){//����nextloading��һ��
			if(MouseOnObj(x, y, ensure)){
				nextloading=false;clearArray(shadowShow);
				if(mapLevel==1){
					dialogShowFlag=true;
					var shadow=new rectangle(0,0,0,0,canvasWidth,canvasHeight,"rgba(0,0,0,0.7)");
					shadowShow.push(shadow);
			//		drawAll();
					dialogShow();
					
				}else if(mapLevel==2){
					canvas.removeEventListener('click', cCheck, false);
					ourTurn.pause();bigMapAudio.currentTime=3;bigMapAudio.play();
					shumei=true;
				    setTimeout("big_map(0)",500);
					setTimeout(function(){canvas.addEventListener('click', cCheck, false);},1500);
				}else if(mapLevel==3){
					canvas.removeEventListener('click', cCheck, false);
					ourTurn.pause();bigMapAudio.currentTime=3;bigMapAudio.play();
					shumei=true;
				    setTimeout("big_map(0)",500);
					setTimeout(function(){canvas.addEventListener('click', cCheck, false);},1500);
				}else if(mapLevel==4){
					canvas.removeEventListener('click', cCheck, false);
					ourTurn.pause();bigMapAudio.currentTime=3;bigMapAudio.play();
					shumei=true;
				    setTimeout("big_map(0)",500);
					setTimeout(function(){canvas.addEventListener('click', cCheck, false);},1500);
				}else if(mapLevel==5){
					canvas.removeEventListener('click', cCheck, false);
					ourTurn.pause();bigMapAudio.currentTime=3;bigMapAudio.play();
					shumei=true;
				    setTimeout("big_map(0)",500);
					setTimeout(function(){canvas.addEventListener('click', cCheck, false);},1500);
				}else if(mapLevel==6){
					canvas.removeEventListener('click', cCheck, false);
					ourTurn.pause();bigMapAudio.currentTime=3;bigMapAudio.play();
					shumei=true;
				    setTimeout("big_map(0)",500);
					setTimeout(function(){canvas.addEventListener('click', cCheck, false);},1500);
				}else if(mapLevel==7){
					canvas.removeEventListener('click', cCheck, false);
					ourTurn.pause();bigMapAudio.currentTime=3;bigMapAudio.play();
					shumei=true;
				    setTimeout("big_map(0)",500);
					setTimeout(function(){canvas.addEventListener('click', cCheck, false);},1500);
				}else if(mapLevel==8){
					canvas.removeEventListener('click', cCheck, false);
					ourTurn.pause();bigMapAudio.currentTime=3;bigMapAudio.play();
					shumei=true;
				    setTimeout("big_map(0)",500);
					setTimeout(function(){canvas.addEventListener('click', cCheck, false);},1500);
				}else if(mapLevel==9){
					canvas.removeEventListener('click', cCheck, false);
					ourTurn.pause();bigMapAudio.currentTime=3;bigMapAudio.play();
					shumei=true;
				    setTimeout("big_map(0)",500);
					setTimeout(function(){canvas.addEventListener('click', cCheck, false);},1500);
				}else if(mapLevel==10){
					canvas.removeEventListener('click', cCheck, false);
					ourTurn.pause();bigMapAudio.currentTime=3;bigMapAudio.play();
					shumei=true;
				    setTimeout("big_map(0)",500);
					setTimeout(function(){canvas.addEventListener('click', cCheck, false);},1500);
				}else if(mapLevel==11){
					canvas.removeEventListener('click', cCheck, false);
					ourTurn.pause();bigMapAudio.currentTime=3;bigMapAudio.play();
					shumei=true;
				    setTimeout("big_map(0)",500);
					setTimeout(function(){canvas.addEventListener('click', cCheck, false);},1500);
				}
			}
		  }
	}else
	if(cangKuShow){//�ֿ�
		console.log("�ֿ�");	
		if(x>173&&x<290&&y>62&&y<102){	
			clearArr(everything1);dingzhukuangRight=[0,0,0,0,0];
		    tempp=20;
			showCangKU(storehouse.addequips,tempp);	
		}else if(x>300&&x<417&&y>62&&y<102){	
			clearArr(everything1);dingzhukuangRight=[0,0,0,0,0];
			tempp=00;
			showCangKU(storehouse.additems,tempp);
		}else if(x>430&&x<547&&y>62&&y<102){
			clearArr(everything1);dingzhukuangRight=[0,0,0,0,0];
		    tempp=10;
	    	showCangKU(storehouse.addskills,tempp);			
		}else if(x>557&&x<676&&y>62&&y<102){
			clearArr(everything1);dingzhukuangRight=[0,0,0,0,0];
		    tempp=30;
		    showCangKU(storehouse.addpowers,tempp);			
		}else if(MouseOnObj(x, y, CloseImg)){
			  tempp=20;
			  clearArr(everything1);
			  dingzhukuangLeft=[0,0,0,0,0];
		      dingzhukuangRight=[0,0,0,0,0,0];
			  bigMapoption=true;
			  cangKuShow=false;
			  clearArr(shadowShow);
			  drawArr(startShow);
		}
		if(tempp==00){cangKuClick(x,y,storehouse.additems,tempp);}
		if(tempp==10){cangKuClick(x,y,storehouse.addskills,tempp);}
		if(tempp==20){cangKuClick(x,y,storehouse.addequips,tempp);}
		if(tempp==30){cangKuClick(x,y,storehouse.addpowers,tempp);}
	}else
	if(itemStore){//�����̵�
		console.log("�����̵�  ");
		itemStoreClick(x,y,storehouse.additems,store.items,9);
	}else
	if(equipStore){//�����̵�
		console.log("�����̵�  ");
		equipStoreClick(x,y,storehouse.addequips,store.equips,10);
	}else
	if(ZBZhengLi){//װ������
		console.log("װ������  ");
		equipClick(x,y,rolesArray[big_role_index].equips,storehouse.addequips,8);
	}else
	if(DuiYuan){//��Ա
		console.log("��Ա  ");
	    duiyuanClick(x,y);
	}else
	if(sureToFX){//��ӡ�Ϳ����Ŀ��� �ͽ�����һ�صĿ���ת��
		console.log("��ӡ�Ϳ����Ŀ���  ");
		if(MouseOnObj(x, y, ensure)){//���ȷ��
			//�����ŭ�������ӡ��ť
			if(itemOption==4){backToStoreHouse(rolesArray[big_role_index],rolesArray[big_role_index].powers,storehouse.addpowers,6,dingzhukuangLeft,false);}
			//���ŭ���������ð�ť
			else if(itemOption==5){backToBag(rolesArray[big_role_index],storehouse.addpowers,rolesArray[big_role_index].powers,6,dingzhukuangRight,false);}
			//����ؼ������ӡ��ť
			else if(itemOption==6){backToStoreHouse(rolesArray[big_role_index],rolesArray[big_role_index].skills,storehouse.addskills,7,dingzhukuangLeft,false);}
			//����ؼ��������ð�ť
			else if(itemOption==7){backToBag(rolesArray[big_role_index],storehouse.addskills,rolesArray[big_role_index].skills,7,dingzhukuangRight,false);}
			//���װ�������ȷ��װ��
			else if(itemOption==12){backToBag(rolesArray[big_role_index],storehouse.addequips,rolesArray[big_role_index].equips,8,dingzhukuangRight,false);}
			//���װ������ķ���ֿ�
			else if(itemOption==13){backToStoreHouse(rolesArray[big_role_index],rolesArray[big_role_index].equips,storehouse.addequips,8,dingzhukuangLeft,false);}
			//��������̵�ķ���
			else if(itemOption==14){backToStoreHouse(rolesArray[big_role_index],storehouse.addequips,store.equips,10,dingzhukuangLeft,false);}
			//���������һ�ص�ȷ��
			else if(itemOption==10){
				                    bigMapAudio.pause();			                       
									clearArr(confirmArray);
									if(mapLevel==1){smallLQS.sx=140;smallLQS.sy=205;}
									else if(mapLevel==2){smallLQS.sx=185;smallLQS.sy=135;}
									else if(mapLevel==3){smallLQS.sx=280;smallLQS.sy=110;}
									else if(mapLevel==4){smallLQS.sx=350;smallLQS.sy=65;}
									else if(mapLevel==5){smallLQS.sx=490;smallLQS.sy=30;}
									else if(mapLevel==6){smallLQS.sx=470;smallLQS.sy=125;}
									else if(mapLevel==7){smallLQS.sx=410;smallLQS.sy=190;}
									else if(mapLevel==8){smallLQS.sx=560;smallLQS.sy=170;}
									else if(mapLevel==9){smallLQS.sx=640;smallLQS.sy=130;}
									else if(mapLevel==10){smallLQS.sx=850;smallLQS.sy=85;}//����
									else if(mapLevel==11){smallLQS.sx=630;smallLQS.sy=55;}//����
									else if(mapLevel==12){smallLQS.sx=680;smallLQS.sy=68;}//����
									drawBigMap();setTimeout(nextLevel,1000);
			}
	
		}
		else if(MouseOnObj(x, y, cancel)){//���ȡ��
			clearArr(confirmArray);
			sureToFX=false;
			if(itemOption==14){equipStore=true;}
			else if(itemOption==4||itemOption==5){NJZhengLi=true;}
			drawBigMap();
		}
	}else
	if(itemNumChange){//�ı�����
		console.log("�ı�����  ");
		if(MouseOnObj(x, y, ensure)){//���ȷ��
			//����ǵ���˱����ķ���ֿ�
			if(itemOption==0){backToStoreHouse(rolesArray[big_role_index],rolesArray[big_role_index].items,storehouse.additems,5,dingzhukuangLeft,false);}
			//�������˱����Ķ���
			else if(itemOption==1){backToStoreHouse(rolesArray[big_role_index],rolesArray[big_role_index].items,storehouse.additems,5,dingzhukuangLeft,true);}
			//�������˲ֿ�ķ��뱳��
			else if(itemOption==2){backToBag(rolesArray[big_role_index],storehouse.additems,rolesArray[big_role_index].items,5,dingzhukuangRight,false);}
			//����������������вֿ�Ķ���
			else if(itemOption==3){backToBag(rolesArray[big_role_index],storehouse.additems,rolesArray[big_role_index].items,5,dingzhukuangRight,true);}
			//�������˵����̵�ķ���
			else if(itemOption==8){backToStoreHouse(rolesArray[big_role_index],storehouse.additems,store.items,9,dingzhukuangLeft,false);}
			//�������˵����̵�Ĺ���
			else if(itemOption==9){backToBag(rolesArray[big_role_index],store.items,storehouse.additems,9,dingzhukuangRight,false);}
			//�������������̵�Ĺ���
			else if(itemOption==11){backToBag(rolesArray[big_role_index],store.equips,storehouse.addequips,10,dingzhukuangRight,false);}
			//�������˵����ֿ�Ķ���
			else if(itemOption==12){
				if(tempp==00){backToBag(rolesArray[big_role_index],storehouse.additems,rolesArray[big_role_index].items,5,dingzhukuangRight,true);}
				else if(tempp==10){backToBag(rolesArray[big_role_index],storehouse.addskills,rolesArray[big_role_index].skills,5,dingzhukuangRight,true);}
				else if(tempp==20){backToBag(rolesArray[big_role_index],storehouse.addequips,rolesArray[big_role_index].equips,5,dingzhukuangRight,true);}
				else if(tempp==30){backToBag(rolesArray[big_role_index],storehouse.addpowers,rolesArray[big_role_index].powers,5,dingzhukuangRight,true);}
				}
		}
		else if(MouseOnObj(x, y, cancel)){//���ȡ��
			clearArr(confirmArray);
			dragNum=0;
			itemNumChange=false;
			if(itemOption==8||itemOption==9){itemStore=true;}
			else if(itemOption==11){equipStore=true;}
			else if(itemOption==12){cangKuShow=true;}
            else{DJZhengLi=true;}
			drawBigMap();
		}else if(MouseOnObj(x, y, minusButton)){//������ٰ�ť
			 if(itemOption==0||itemOption==1||itemOption==8){
		       if(dingzhukuangLeft[0]==1){index=0;}
			   else if(dingzhukuangLeft[1]==1){index=1;}
			   else if(dingzhukuangLeft[2]==1){index=2;}
			   else if(dingzhukuangLeft[3]==1){index=3;}
			   else if(dingzhukuangLeft[4]==1){index=4;}
			   if(dragNum>0){
			      dragNum--;
				  huaKuai.sx=dragNum*180/rolesArray[big_role_index].items[index].num+274;
			   }
		   }else if(itemOption==2||itemOption==3||itemOption==9||itemOption==11||itemOption==12){
		       if(dingzhukuangRight[0]==1){index=0;}
			   else if(dingzhukuangRight[1]==1){index=1;}
			   else if(dingzhukuangRight[2]==1){index=2;}
			   else if(dingzhukuangRight[3]==1){index=3;}
			   else if(dingzhukuangRight[4]==1){index=4;}
			   else if(dingzhukuangRight[5]==1){index=5;}
			   if(itemOption==9){
				   if(dragNum>0){
                      dragNum--;
					  huaKuai.sx=dragNum*180/store.items[index].num+274;
				   }
			   }
			   else if(itemOption==11){
				   	  if(dragNum>0){
                      dragNum--;
					  huaKuai.sx=dragNum*180/store.equips[index].num+274;
				   }
			   }
			   else if(itemOption==12&&tempp==00){
				      if(dragNum>0){
					  dragNum--;
					  huaKuai.sx=dragNum*180/storehouse.additems[index].num+394;
					  }
				 }
			   else if(itemOption==12&&tempp==20){
				   	  if(dragNum>0){
                      dragNum--;
					  huaKuai.sx=dragNum*180/storehouse.addequips[index].num+394;
				      }
			     }
			   else if(itemOption==12&&tempp==10){
					  dragNum=1;
					  huaKuai.sx=dragNum*180/storehouse.addskills[index].num+394;
				 }
			   else if(itemOption==12&&tempp==30){
                      dragNum=1;
					  huaKuai.sx=dragNum*180/storehouse.addpowers[index].num+394;
			     }
			   else{if(dragNum>0){dragNum--;huaKuai.sx=dragNum*180/storehouse.additems[index].num+274;}}
		   }
		   selsectNum.name="��ѡ����  "+dragNum+"  �ݸõ���";
		   drawBigMap();
		}else if(MouseOnObj(x, y, addButton)){//������Ӱ�ť
		   if(itemOption==0||itemOption==1||itemOption==8){
		       if(dingzhukuangLeft[0]==1){index=0;}
			   else if(dingzhukuangLeft[1]==1){index=1;}
			   else if(dingzhukuangLeft[2]==1){index=2;}
			   else if(dingzhukuangLeft[3]==1){index=3;}
			   else if(dingzhukuangLeft[4]==1){index=4;}
		//	   console.log(index+" "+dragNum+"rolesArray[big_role_index].items[index].num"+rolesArray[big_role_index].items[index].num);
			   if(dragNum<rolesArray[big_role_index].items[index].num){
			      dragNum++;
				  huaKuai.sx=dragNum*180/rolesArray[big_role_index].items[index].num+274;
			   }
		   }else if(itemOption==2||itemOption==3||itemOption==9||itemOption==11||itemOption==12){
		       if(dingzhukuangRight[0]==1){index=0;}
			   else if(dingzhukuangRight[1]==1){index=1;}
			   else if(dingzhukuangRight[2]==1){index=2;}
			   else if(dingzhukuangRight[3]==1){index=3;}
			   else if(dingzhukuangRight[4]==1){index=4;}
			   else if(dingzhukuangRight[5]==1){index=5;}
			   if(itemOption==9){
				   if(dragNum<store.items[index].num){
                      dragNum++;
					   //�������
				      if(dragNum*returnItemPrice(store.items[index].id)>teamMoney){
				         dragNum=Math.floor(teamMoney/returnItemPrice(store.items[index].id));
						 huaKuai.sx=dragNum*180/store.items[index].num+274;
				      }else{
				    	 huaKuai.sx=dragNum*180/store.items[index].num+274;
				      }
				   }
			   }
			   else if(itemOption==11){
				   if(dragNum<store.equips[index].num){
                      dragNum++;
					   //�������
				      if(dragNum*returnEquipPrice(store.equips[index].id)>teamMoney){
				         dragNum=Math.floor(teamMoney/returnEquipPrice(store.equips[index].id));
						 huaKuai.sx=dragNum*180/store.equips[index].num+274;
				      }else{
				    	 huaKuai.sx=dragNum*180/store.equips[index].num+274;
				      }
				   }
			   }
			   	else if(itemOption==12&&tempp==00){
				   if(dragNum<storehouse.additems[index].num)
				   {dragNum++;huaKuai.sx=dragNum*180/storehouse.additems[index].num+394;}
				 }
				else if(itemOption==12&&tempp==20){
				   if(dragNum<storehouse.addequips[index].num)
				   {dragNum++;huaKuai.sx=dragNum*180/storehouse.addequips[index].num+394;}
				 }
				else if(itemOption==12&&tempp==10){				   
				   dragNum=1;huaKuai.sx=dragNum*180/storehouse.addskills[index].num+394;
				 }
			    else if(itemOption==12&&tempp==30){
				   dragNum=1;huaKuai.sx=dragNum*180/storehouse.addpowers[index].num+394;
				 }
			   else{if(dragNum<storehouse.additems[index].num){dragNum++;huaKuai.sx=dragNum*180/storehouse.additems[index].num+274;}}
		   }
		   
		   selsectNum.name="��ѡ����  "+dragNum+"  �ݸõ���";
		   drawBigMap();
	    }
	}else
	if(MJZhengLi){//�ؼ�����
		console.log("�ؼ�����  ");
        skillClick(x,y,rolesArray[big_role_index].skills,storehouse.addskills,7);
	}else
	if(NJZhengLi){//ŭ������
		console.log("ŭ������  ");
		powerClick(x,y,rolesArray[big_role_index].powers,storehouse.addpowers,6);
	}else
	if(DJZhengLi){//��������
		console.log("��������  ");
	   itemClick(x,y,rolesArray[big_role_index].items,storehouse.additems,5);
	}else
	if(bigMapoption){//��ʾ���ͼ����
		console.log("��ʾ���ͼ����  ");
	    var temp=0;//������¼���ڴ��ͼ�Ǹ���ť��
		if(MouseOnPic(x, y, zhengLiButton)){//�������ť
			if(big_option==1){//�ڶ��ε������ť
			   big_option=0;
			   clearArr(startShow);
			   big_map();
			}else{//��һ�ε������ť
			   clearArr(startShow);
			   temp=1;
			   big_option=1;
			   big_map(temp);
			   startShow.push(daojuZLButton);
			   startShow.push(zhuangbeiButton);
			   startShow.push(nujiButton);
			   startShow.push(mijiButton);
			}
			drawArr(startShow);
		}else if(MouseOnPic(x, y, duiWuButton)){//������鰴ť
			if(big_option==2){//�ڶ��ε�����鰴ť
			   big_option=0;
			   clearArr(startShow);
			   big_map();
			}else{//��һ�ε�����鰴ť
			   clearArr(startShow);
			   temp=2;
			   big_option=2;
		       big_map(temp);
			   startShow.push(changkuButton);
			   startShow.push(duiyuanButton);
			}
			drawArr(startShow);
		}else if(MouseOnPic(x, y, shangDianButton)){//����̵갴ť
			if(big_option==3){//�ڶ��ε���̵갴ť
			   big_option=0;
			   clearArr(startShow);
			   big_map();
		    }else{//��һ�ε���̵갴ť
			   clearArr(startShow);
			   temp=3;
			   big_option=3;
			   big_map(temp);
			   startShow.push(daojuStore);
			   startShow.push(wuqiStore);
		    }
			drawArr(startShow);
		}else if(MouseOnPic(x, y, systemButton)){//���ϵͳ��ť
			if(big_option==4){//�ڶ��ε��ϵͳ��ť
			   big_option=0;
			   clearArr(startShow);
			   big_map();
			}else{//��һ�ε��ϵͳ��ť
			   clearArr(startShow);
			   temp=4;
			   big_option=4;
			   big_map(temp);
			   startShow.push(CDButton);
			   startShow.push(JZButton);
			   startShow.push(TCButton);
			}
			drawArr(startShow);
		}else if(big_option==1){//����Ѿ����������ť
	    	if(MouseOnPic(x, y, daojuZLButton)){//�����������
		    	temp=5;
				ZhengLi(rolesArray[big_role_index],temp);
			}else
			if(MouseOnPic(x, y, mijiButton)){//����ؼ�����
				temp=7;
				ZhengLi(rolesArray[big_role_index],temp);
			}else
			if(MouseOnPic(x, y, nujiButton)){//���ŭ������
				temp=6;
				ZhengLi(rolesArray[big_role_index],temp);
			}else
			if(MouseOnPic(x, y, zhuangbeiButton)){//���װ������
				temp=8;
				ZhengLi(rolesArray[big_role_index],temp);
			}
	    }else if(big_option==2){
	    	if(MouseOnPic(x, y, duiyuanButton)){//�����Ա
			   teamMember(rolesArray[big_role_index],0);
	    	}else if(MouseOnPic(x, y, changkuButton)){//����ֿ�
				tempp=20;
	    		showCangKU(storehouse.addequips,tempp);
	    	}
	    }else if(big_option==3){
		    if(MouseOnPic(x, y, daojuStore)){//��������̵�
			   temp=9;
			   ZhengLi(rolesArray[big_role_index],temp);
	    	}else if(MouseOnPic(x, y, wuqiStore)){//��������̵�
			   temp=10;
			   ZhengLi(rolesArray[big_role_index],temp);
			}
		}else if(big_option==4){
			 if(MouseOnPic(x, y, TCButton)){
				 bigMapoption=false;bigMapAudio.pause(); showStart=true;  clearAll();  startRequest();  Index_page();
			 }else if(MouseOnPic(x, y, CDButton)){
				 saveData();alert("�浵�ɹ�");
			 }
		}else if(MouseOnPic(x, y, level_2)&&mapLevel==1){//����ڵ�2��
		   clearArray(everything2);itemOption=10;areUSureFX();
		}else if(MouseOnPic(x, y, level_3)&&mapLevel==2){//����ڵ�3��
		   clearArray(everything2);itemOption=10;areUSureFX();
		}else if(MouseOnPic(x, y, level_4)&&mapLevel==3){//����ڵ�4��
			 clearArray(everything2);itemOption=10;areUSureFX();
		}else if(MouseOnPic(x, y, level_5)&&mapLevel==4){//����ڵ�5��
			 clearArray(everything2);itemOption=10;areUSureFX();
		}else if(MouseOnPic(x, y, level_6)&&mapLevel==5){//����ڵ�6��
			 clearArray(everything2);itemOption=10;areUSureFX();
		}else if(MouseOnPic(x, y, level_7)&&mapLevel==6){//����ڵ�7��
			clearArray(everything2);itemOption=10;areUSureFX();
		}else if(MouseOnPic(x, y, level_8)&&mapLevel==7){//����ڵ�8��
			clearArray(everything2);itemOption=10;areUSureFX();
		}else if(MouseOnPic(x, y, level_9)&&mapLevel==8){//����ڵ�9��
			clearArray(everything2);itemOption=10;areUSureFX();
		}else if(MouseOnPic(x, y, level_10)&&mapLevel==9){//����ڵ�10��
			clearArray(everything2);itemOption=10;areUSureFX();
		}else if(MouseOnPic(x, y, level_11)&&mapLevel==10){//����ڵ�11��
			clearArray(everything2);itemOption=10;areUSureFX();
		}
	}else
	if(gameover){//��Ϸ����
	   console.log("��Ϸ����  ");
	   if(MouseOnObj(x, y, fanHuiButton)){
		  gameover=false;
		  showStart=true;
		  clearAll();
		  startRequest(); 
		  Index_page();
	   }else if(MouseOnObj(x, y, jiaZaiButton)){
		  //gameover=false;
		  //loadData();  
	   }
	}else
	if(gameBackGroundShow){//��Ϸ����˵��
		  console.log("��Ϸ����˵��  ");
		if(x>706&&x<778&&y>500&&y<530){  
			 window.cancelAnimationFrame(handle); 
			 handle = null;
			gameBackGroundShow=false;
			gamebgShow.pause();
			moveMap();
		}
	}else
    if (showStart) {//��ʼ����
		console.log("��ʼ����  ");
        if (MouseOnObj(x, y, startButton1)) {
		    begin.pause();   
            setTimeout(function() {
                clearArr(startShow);
                showStart = false;
                //dialogShow();
				
				//showMapName();
				//drawAll();	
				gameBGShow();
            },
            200);
        }
        if (MouseOnObj(x, y, startButton2)) {
        	begin.pause();  
        	loadData();
        }
        if (MouseOnObj(x, y, startButton3)) {
            alert("��������ʿ����Ҳ��");
        }
    }else
	if(enemysStatusShow) {//����״̬��ʾ
			console.log("����״̬��ʾ  ");
        if (MouseOnObj(x, y, CloseImg)) {
            enemysStatusShow = false;
            clearArray(statusArray);
            clearArray(speArray);
        }
        if (MouseOnObj(x, y, leftArrow)) {
            clearArray(statusArray);
            clearArray(speArray);
            enemysIndex--;
            if (enemysIndex < 0) {
                enemysIndex = enemysArray.length - 1;
            }
            while (enemysArray[enemysIndex].HP <= 0) {
                enemysIndex--;
                if (enemysIndex < 0) {
                    enemysIndex = enemysArray.length - 1;
                }
            }
           	showEnemysDetailStatus(enemysArray[enemysIndex]);
        }
        if (MouseOnObj(x, y, rightArrow)) {
            clearArray(statusArray);
            clearArray(speArray);
            enemysIndex++;
            if (enemysIndex > enemysArray.length-1) {
                enemysIndex = 0;
            }
            while (enemysArray[enemysIndex].HP <= 0) {
                enemysIndex++;
                if (enemysIndex > enemysArray.length-1) {
                    enemysIndex = 0;
                }
            }
          	showEnemysDetailStatus(enemysArray[enemysIndex]);
        }
        if (MouseOnObj(x, y, skill)) {
            clearArray(speArray);
            skill.img = mj2;
            power.img = nj1;
            equip.img = zb1;
			skillStatus(enemysArray[enemysIndex]);
			
        }
        if (MouseOnObj(x, y, power)) {
            clearArray(speArray);
            skill.img = mj1;
            power.img = nj2;
            equip.img = zb1;
			powerStatus(enemysArray[enemysIndex]);
        }
        if (MouseOnObj(x, y, equip)) {
            clearArray(speArray);
            skill.img = mj1;
            power.img = nj1;
            equip.img = zb2;
	//		drawAll();
        }
    }else
	if(rolesStatusShow) {//�ҷ�״̬��ʾ
			console.log("�ҷ�״̬��ʾ  ");
        if (MouseOnObj(x, y, CloseImg)) {
            rolesStatusShow = false;
            if(!menu2Show){menuShow=true;}
            clearArray(statusArray);
            clearArray(speArray);
        }
        if (MouseOnObj(x, y, leftArrow)) {
            clearArray(statusArray);
            clearArray(speArray);
            tmpIndex--;
            if (tmpIndex < 0) {
                tmpIndex = rolesArray.length - 1;
            }
			while (rolesArray[tmpIndex].HP <= 0) {
                tmpIndex--;
                if (tmpIndex < 0) {
                    tmpIndex = rolesArray.length - 1;
                }
            }
            showRolesDetailStatus(rolesArray[tmpIndex],statusBg.sx,statusBg.sy);
           // skillStatus(rolesArray[tmpIndex]);
        }
        if (MouseOnObj(x, y, rightArrow)) {
            clearArray(statusArray);
            clearArray(speArray);
            tmpIndex++;
            if (tmpIndex > rolesArray.length-1) {
                tmpIndex = 0;
            }
			while (rolesArray[tmpIndex].HP <= 0) {
                tmpIndex++;
                if (tmpIndex > rolesArray.length-1) {
                    tmpIndex = 0;
                }
            }
            showRolesDetailStatus(rolesArray[tmpIndex],statusBg.sx,statusBg.sy);
          
        }
        if (MouseOnObj(x, y, skill)) {
            clearArray(speArray);
            skill.img = mj2;
            power.img = nj1;
            equip.img = zb1;
            skillStatus(rolesArray[tmpIndex]);
        }
        if (MouseOnObj(x, y, power)) {
            clearArray(speArray);
            skill.img = mj1;
            power.img = nj2;
            equip.img = zb1;
            powerStatus(rolesArray[tmpIndex]);
            
        }
        if (MouseOnObj(x, y, equip)) {
            clearArray(speArray);
            skill.img = mj1;
            power.img = nj1;
            equip.img = zb2;
			//drawAll();
        }
    }else
	if(levelUpOk){//����OK
		console.log("����OK  ");
		coutLev=0; 
		clearArr(powerArray);//��շ������������powerArray
		finish = true;//�����finish�����֣�һ�������������finish=true,����һ����û������ʱ�������˵�finish=true
		levelUpOk = false;//�������عص�
		if(isEnemyAllDead()){
				clearInterval(att_end);
				nextGuanKaOpen();
		}
		if(isBossDead()&&mapLevel==3){//&&mapLevel==9&&mapLevel==10
						enemyTurn.pause();
               	        clearInterval(att_end);
				        nextGuanKaOpen();
						}
	/*	if(isBossDead()){
		    	enemyTurn.pause();
               	clearInterval(att_end);
				nextGuanKaOpen();
		}*/
	}else
	if(spiritHuiChun){//�ش�����
		console.log("������ûش��ĺ�����1");
		if(MouseOnRoles(x,y)){
		findRolesIndex(x,y);
		eval(fl + '()'); 
		
		}else{alert("��ѡ���ҷ���ɫ");}
	}else
    if(skillAtt) {//�ؼ�����
        if (MouseOnRange(x, y)) { //�ж���������Ƿ������ǹ�����Χ
            if (MouseOnEnemys(x, y)) { //�ж������Ƿ��ڵ���ͼƬ��
                skillAtt = false;
                end = true;
                clearArray(rangeShow);
                rolesArray[rolesIndex].MP -= skilltmp;
                eval(fl + '()');
            } else if (MouseClickOnRolesIndex(x, y)) { //���������ѡ�еĽ�ɫ��			
                clearArray(rangeShow);
                skillAtt = false;
                find=[[rolesArray[rolesIndex].mapX/rpx,rolesArray[rolesIndex].mapY/rpx]];
                change(find); 
            }
        }
    }else
    if(powerAtt) {//ŭ����
        if (MouseOnRange(x, y)) { //�ж���������Ƿ������ǹ�����Χ
            if (MouseOnEnemys(x, y)) { //�ж������Ƿ��ڵ���ͼƬ��
                powerAtt = false;
                end = true;
                clearArray(rangeShow);
                rolesArray[rolesIndex].pow -= powertmp; //�޸������powֵ
                eval(fl + '()');
            } else if (MouseClickOnRolesIndex(x, y)) { //���������ѡ�еĽ�ɫ��			
                clearArray(rangeShow);
                powerAtt = false;
                find=[[rolesArray[rolesIndex].mapX/rpx,rolesArray[rolesIndex].mapY/rpx]];
                change(find); 
            }
        }
    }else
    if(att) {//��ͨ����
        if (MouseOnRange(x, y)) {
            if (MouseOnEnemys(x, y)) {
                att = false;
                end = true;
                clearArray(rangeShow);
                var tIndex;
				//�ҵ����˵��±�
                for (var i = 0; i < enemysArray.length; i++) {
                    if (Math.floor((x-mapMovX) / rpx) * rpx== enemysArray[i].mapX && Math.floor((y-mapMovY) / rpx) * rpx== enemysArray[i].mapY) {
                       tIndex = i;	  
                    }
                }
				
				//�ҷ���ͨ��������
				console.log("�ҷ���ͨ��������");
                normalAttack(rolesArray[rolesIndex], enemysArray[tIndex]);
			
				//���ҷ���ͨ�������˽�������		
                att_end = setInterval(function() {
                    if (finish) {
                        finish = false;
                        clearInterval(att_end);
						//����������ҷ�����ͨ�����»�����
                        if (enemysArray[tIndex].HP > 0) {
							//������ͨ�����ҷ�
							console.log("������ͨ�����ҷ�");
                            normalAttack(enemysArray[tIndex], rolesArray[rolesIndex]);
							console.log("����ҷ��ڵ��˵���ͨ�����»�����");
							//�Ե�����ͨ�����ҷ���������
                            var tt2 = setInterval(function() {
								console.log("����ҷ��ڵ��˵���ͨ�����»�����"+finish);
                                if (finish) {
                                    finish = false;
                                    clearInterval(tt2);
									console.log("����ҷ��ڵ��˵���ͨ�����»�����");
									//����ҷ��ڵ��˵���ͨ�����»�����
                                    if (rolesArray[rolesIndex].HP > 0) {
										console.log("�ҷ��ڵ��˵���ͨ�����»�����   "+enemysArray[tIndex].name);
										//�����BOSS
										if(enemysArray[tIndex].type==1){
											//���boss��ŭֵ���ˣ������ȷ���
											if(enemysArray[tIndex].pow==enemysArray[tIndex].fullPow){
												console.log("��ΪBOSS��ŭֵ�����Է���ŭ����");
											    Boss_power_attacked(tIndex);
												var boss_power_end1=setInterval(function(){
													 if(bossPowerEnd){
														 console.log("��������һ��ŭ��������������������û�з����ɹ���");
														  clearInterval(boss_power_end1);
														  bossPowerEnd = false;
														  if(rolesArray[rolesIndex].HP>0){  
															console.log("�ٴη���ŭ����");
															setTimeout(_Boss_power_attacked(tIndex), 2000);
														  }
														  else{//�����BOSS���ؼ������£��ҷ���ɫ����
															    console.log("�ҷ�����");
																enemysArray[tIndex].dy = 240;
																powerNumber=2;
																deadEvent(null,rolesArray[rolesIndex]);
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
														  }//else
													 }//finish
												});//var boss_power_end1
												
												var boss_power_end2=setInterval(function(){
													 if(bossPowerEnd){
														  console.log("�ڶ���������ŭ��������������������û�з����ɹ�");
														  clearInterval(boss_power_end2);
														  bossPowerEnd = false;
														  enemysArray[tIndex].dy = 240;
														  if(rolesArray[rolesIndex].HP>0){
																	 powerNumber=2;
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
														  else{//�����BOSS���ؼ������£��ҷ���ɫ����
																powerNumber=2;
																deadEvent(null,rolesArray[rolesIndex]);
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
														  }//else
													 }//finish
												});//var boss_power_end2		
											}//if(enemyArray)
											else{
												var n = Math.floor(Math.random() * 100) + 1;
												console.log("BOSSŭֵû�������ո���");
												if(n<=50){
													console.log("�����ؼ�����");
													//ִ��BOSS���ؼ�����
													Boss_skill_attacked(tIndex);
													//boss�ؼ�ִ������
													var boss_skill_end=setInterval(function(){
														 if(finish){
															 console.log("boss�ؼ�ִ������");
															  clearInterval(boss_skill_end);
															  finish = false;
															  rolesArray[rolesIndex].HP -= skillVar;
															  //�����BOSS���ؼ������£��ҷ���ɫ������
															  if(rolesArray[rolesIndex].HP>0){
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
															  else{//�����BOSS���ؼ������£��ҷ���ɫ����
																	deadEvent(null,rolesArray[rolesIndex]);
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
																		}
																	});
															  }//else
														 }// if(finish)
													});//var boss_skill_end
												}else{
													console.log("����ŭ����");
													Boss_power_attacked(tIndex);
													var boss_power_end1=setInterval(function(){
														 if(bossPowerEnd){
															 console.log("��������һ��ŭ��������������������û�з����ɹ���");
															  clearInterval(boss_power_end1);
															  bossPowerEnd = false;
															  if(rolesArray[rolesIndex].HP>0){  
																console.log("�ٴη���ŭ����");
																setTimeout(_Boss_power_attacked(tIndex), 2000);
															  }
															  else{//�����BOSS���ؼ������£��ҷ���ɫ����
																	enemysArray[tIndex].dy = 240;
																	powerNumber=2;
																	deadEvent(null,rolesArray[rolesIndex]);
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
															  }//else
														 }//finish
													});//var boss_power_end1
													
													var boss_power_end2=setInterval(function(){
														 if(bossPowerEnd){
															  console.log("�ڶ���������ŭ��������������������û�з����ɹ�");
															  clearInterval(boss_power_end2);
															  bossPowerEnd = false;
															  enemysArray[tIndex].dy = 240;
															  if(rolesArray[rolesIndex].HP>0){
																		 powerNumber=2;
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
															  else{//�����BOSS���ؼ������£��ҷ���ɫ����
																	powerNumber=2;
																	deadEvent(null,rolesArray[rolesIndex]);
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
															  }//else
														 }//finish
													});//var boss_power_end2	
												}//else
											}//else
										}//if(enemysArray[tIndex].type==1)
										else//�����С��
										{
											//----------------
											console.log("��С��");
											rolesArray[rolesIndex].dy = 240;
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
											//------------------------
										}
                                    } 
									else //����ҷ��ڵ��˵���ͨ��������
									{		
                                        deadEvent(null,rolesArray[rolesIndex]);
                                        var tt3 = setInterval(function() {
                                            if (finish) {
                                                finish = false;
                                                clearInterval(tt3);
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
                                            }
                                        });
                                    }
                                    drawAll();
                                }
                            });
                        }  
						else//�������ҷ�����ͨ����������
						{
                            rolesArray[rolesIndex].dy = 240;
                            deadEvent(rolesArray[rolesIndex],enemysArray[tIndex]);
                            att_end = setInterval(function() {
                                if (finish) {
                                    finish = false;
                                    clearInterval(att_end);
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
                             //       drawAll();
                                }
                            });
                        }
                    }
                });
            } else 
			if (MouseClickOnRolesIndex(x, y)) {
                clearArray(rangeShow);
                att = false;
                find=[[rolesArray[rolesIndex].mapX/rpx,rolesArray[rolesIndex].mapY/rpx]];
                change(find); 
				can_walk();
            }
        }
	else{
            clearArray(rangeShow);
            att = false;
            find=[[rolesArray[rolesIndex].mapX/rpx,rolesArray[rolesIndex].mapY/rpx]];
            change(find); 
		    can_walk();
        }
    }else
    if(skillConfirmShow) {//ѡ���ܺ�����ȷ�Ϻ�ȡ��������ť
        if (MouseOnObj(x, y, ensure)) { //�ж�����Ƿ���Ŀ����
			 doUseSX();//���������У�Ȼ�󷢶��ܼ�����
			 //���߻ָ�
			recover_walk();
            for (var i = 0; i < skillArrays.length; i++) {
                if (rolesArray[rolesIndex].skills[tp] == skillArrays[i].id) {
                    fl = skillArrays[i].func;
                    skilltmp = skillArrays[i].mp;
                    skillVar = skillArrays[i].skillVar;
                    skillSuccess = skillArrays[i].success;
                    effect = skillArrays[i].effect;
                    skillName = skillArrays[i].name;
                }
            }
            if (rolesArray[rolesIndex].MP < skilltmp) {
                mpAlert();
            } else {
                skillConfirmShow = false;
                skillAtt = true;
                skillShow = false;
                menuShow = false;
                clearArray(confirmArray);
                clearArray(skillArray);
                clearArray(everything3);
               //drawAll();
            }
        } else if (MouseOnObj(x, y, cancel)) {
            skillConfirmShow = false;
            skillShow = true;
            clearArray(confirmArray);
        }
    }else
    if(powerConfirmShow) { //ѡ���ܺ�����ȷ�Ϻ�ȡ��������ť
        if (MouseOnObj(x, y, ensure)) { //�ж�����Ƿ���Ŀ����
            doUseSX();//���������У�Ȼ�󷢶�ŭ����
			//���߻ָ�
			;
            for (var i = 0; i < powerArrays.length; i++) {
                if (rolesArray[rolesIndex].powers[tp] == powerArrays[i].id) {
                    fl = powerArrays[i].func;
                    powertmp = powerArrays[i].p;
                    powerVar = powerArrays[i].powerVar;
                    powerSuccess = powerArrays[i].success;
                    effect = powerArrays[i].effect;
                    powerName = powerArrays[i].name;
                }
            }
			
            if (rolesArray[rolesIndex].pow < powertmp) {
                powAlert();
            } else {
                powerConfirmShow = false;
                powerAtt = true;
                powerShow = false;
                menuShow = false;
                clearArray(confirmArray);
                clearArray(powerArray);
                clearArray(everything3);
                //drawAll();
            }
        } else 
		if (MouseOnObj(x, y, cancel)) {
            powerConfirmShow = false;
            powerShow = true;
            clearArray(confirmArray);
        }
    }else
	if(spiritConfirmShow){//������ȷ��
       if (MouseOnObj(x, y, ensure)) {//��������ȷ����ť��
		   //���߻ָ�
		   recover_walk();
		   var whichspirit;
		   console.log("rolesArray[rolesIndex].has_walkjingshenli:  "+rolesArray[rolesIndex].has_walk);
           for (var i = 0; i < spiritArrays.length; i++) 
		   {   
                if (rolesArray[rolesIndex].spirits[tp].id == spiritArrays[i].id)
				{     spiritShow = false;
					  menuShow = false;
					  spiritConfirmShow = false;
					  clearArray(confirmArray);
					  clearArray(rangeShow);
					  clearArray(spiritArray);
					  clearArray(everything3);
					if(rolesArray[rolesIndex].spirits[tp].id==1)//�ش�
					{   //��ʹ���������У�Ȼ���ٷ����ش���˵��ȷʵʹ��������
						doUseSX();
						var tmp = spiritArrays[i].gold;
					    if(rolesArray[rolesIndex].SP < tmp){spAlert();}
					    else{
						 /*     spiritShow = false;
					          menuShow = false;
					          spiritConfirmShow = false;
					          clearArray(confirmArray);
					          clearArray(rangeShow);
					          clearArray(spiritArray);
					          clearArray(everything3);*/

							  rolesArray[rolesIndex].SP=rolesArray[rolesIndex].SP-spiritArrays[i].gold;
							  fl = spiritArrays[i].func;
							  spiritVar = spiritArrays[i].spiritVar;
							  effect = spiritArrays[i].effect;
							  whichspirit=1;
							  spiritAlert(whichspirit);
							  spiritHuiChun=true;
					    }
                    }else
					if(rolesArray[rolesIndex].spirits[tp].id==2)//��ɱ
					{ 
                       //��ʹ���������У�Ȼ���ٷ�����ɱ��˵��ȷʵʹ��������
					  doUseSX();
					  var tmp = spiritArrays[i].gold;
					  if(rolesArray[rolesIndex].SP < tmp){spAlert();}
					  else{
						  //�۵�SP���򿪾�ɱ����
						  rolesArray[rolesIndex].SP=rolesArray[rolesIndex].SP-spiritArrays[i].gold;  
						  rolesArray[rolesIndex].spiritJueSha=1;
						 
						  //��Ϊÿ�غ�ֻ��ʹ��һ�Σ�����ʹ�ô�������1
						  rolesArray[rolesIndex].spirits[tp].num -= 1;
						  //---ɾ�����������
						  if (rolesArray[rolesIndex].spirits[tp].num == 0) {
						     rolesArray[rolesIndex].spirits.splice(tp, 1);//�޳����������
						   }
						   whichspirit=2;
						   spiritAlert(whichspirit);
					       }
						   break;
                    }else
					if(rolesArray[rolesIndex].spirits[tp].id==3)//��ɱ
					{console.log("rolesArray[rolesIndex].has_walkshensha:  "+rolesArray[rolesIndex].has_walk);
                        //��ʹ���������У�Ȼ���ٷ�����ɱ��˵��ȷʵʹ��������
						doUseSX();
						var tmp = spiritArrays[i].gold;
					    if(rolesArray[rolesIndex].SP < tmp){spAlert();}
					    else{
						rolesArray[rolesIndex].SP=rolesArray[rolesIndex].SP-spiritArrays[i].gold;  
						rolesArray[rolesIndex].spiritSheSha=1;
						rolesArray[rolesIndex].spirits[tp].num -= 1;
						if (rolesArray[rolesIndex].spirits[tp].num == 0) {
						  rolesArray[rolesIndex].spirits.splice(tp, 1);//�޳����������
						   }
						   whichspirit=3;
						   spiritAlert(whichspirit);
						}
						 break;
					}else
					if(rolesArray[rolesIndex].spirits[tp].id==4)//����
					{   
						//��ʹ���������У�Ȼ���ٷ������ܣ�˵��ȷʵʹ��������
						doUseSX();
						var tmp = spiritArrays[i].gold;
					    if(rolesArray[rolesIndex].SP < tmp){spAlert();}
					    else{
						rolesArray[rolesIndex].SP=rolesArray[rolesIndex].SP-spiritArrays[i].gold;  
						rolesArray[rolesIndex].spiritShanBi=1;
						rolesArray[rolesIndex].spirits[tp].num -= 1;
						if (rolesArray[rolesIndex].spirits[tp].num == 0) {
						   rolesArray[rolesIndex].spirits.splice(tp, 1);//�޳����������
						   }
						   whichspirit=4;
						   spiritAlert(whichspirit);
						}
						break;
					}else
					if(rolesArray[rolesIndex].spirits[tp].id==5)//����
					{
						var tmp = spiritArrays[i].gold;
					    if(rolesArray[rolesIndex].SP < tmp){spAlert();}
					    else{
						rolesArray[rolesIndex].SP=rolesArray[rolesIndex].SP-spiritArrays[i].gold;  
						rolesArray[rolesIndex].spiritShenXing=1;
						
					    rolesArray[rolesIndex].movement+=6;
					    rolesArray[rolesIndex].spirits[tp].num -= 1;
						if (rolesArray[rolesIndex].spirits[tp].num == 0) {
						    rolesArray[rolesIndex].spirits.splice(tp, 1);//�޳����������
						    console.log( rolesArray[rolesIndex].name+"�Ѿ���������");
						   }
						   whichspirit=5;
						   spiritAlert(whichspirit);
						}
						 break;
					}
					
                 }	 
	        }          
	   }// if (MouseOnObj(x, y, ensure)) 
	   if (MouseOnObj(x, y, cancel)) {
		   spiritConfirmShow=false;
		   spiritShow = true;
		   clearArray(confirmArray);
	   }
	}else
    if (itemConfirmShow) { //�����Ƿ�ȷ��ʹ�ú���
		if(!isRoleHasUsedItem(rolesArray[rolesIndex])){
        if (MouseOnObj(x, y, ensure)) { //������ȷ����ť
			//���߻ָ�
			recover_walk();
			//----���лָ�----
			doUseSX();
			//----------------
			if(rolesArray[rolesIndex].items[tp].id==3){//��ѡ���˸����ʱ	
				if(deadArray.length>0){                //����ҷ���������
					console.log("ѡ���˸����");
					rolesArray[rolesIndex].has_use_Item=1;
					finish = false;
					itemShow = false;
					menuShow = false;
					itemConfirmShow = false;
					clearArray(confirmArray);
					clearArray(itemArray);
					clearArray(rangeShow);//���ߵ������Աߵ�ʱ��ķۺ�ɫ�ĸ���
					clearArray(everything1);
					clearArray(everything3);
					afterRecoverEvent();            //ִ�и����
				}
				else{noDeadAlert();}
			}//if(rolesArray[rolesIndex].items[tp].id==3)����
			else{            //ѡ���������ĵ���
              finish = false;
              itemShow = false;
              menuShow = false;
              itemConfirmShow = false;
			  rolesArray[rolesIndex].has_use_Item=1;
              clearArray(confirmArray);
              clearArray(itemArray);
              clearArray(rangeShow);
              clearArray(everything3);
              for (var i = 0; i < itemArrays.length; i++) {
                if (rolesArray[rolesIndex].items[tp].id == itemArrays[i].id) {
                    fl = itemArrays[i].func;
                    itemVar = itemArrays[i].itemVar;
                    effect = itemArrays[i].effect;
                }
              }	  
			  eval(fl + '()');    //ִ�е��ߵĹ���
              rolesArray[rolesIndex].items[tp].num -= 1;//��������-1
              if (rolesArray[rolesIndex].items[tp].num == 0) {
                rolesArray[rolesIndex].items.splice(tp, 1);//�޳��������
            
               }
			}
		}
			  //�Ե��ߵĺ�����������������û��ʹ����
            /*  var tt = setInterval(function() {
                    if (finish) {
                    finish = false;
                    clearInterval(tt);
                    rolesArray[rolesIndex].dy = 240;
                    if (judeEnd()) {
                        end = true;
                        ai = true;
                        enemyRoundShow();
                        setTimeout(function() {
                            enemysAction();
                        },
                        2000);
                    }else{end=false;}
                }
              });*/
           // drawAll();
			 }else
		if (MouseOnObj(x, y, cancel)) { //������ȡ����ť
            itemConfirmShow = false;
            itemShow = true;
            clearArray(confirmArray);
        }
	else{
		 finish = false;
         itemShow = false;
         menuShow = false;
         itemConfirmShow = false;
		 clearArray(confirmArray);
         clearArray(itemArray);
         clearArray(rangeShow);
         clearArray(everything3);
		 hasusedItemAlert();
		}
    }else
	if(afterRecoverShow){ //����
	  if (MouseOnObj(x, y, ItemBg)){//����ڱ�����	
	 // 	alert(rolesArray[rolesIndex].name);
		  var t=deadArray.length;
		  console.log("t��"+t);
          tpp = (ty - ItemBg.sy ) / rpx;//˵��ѡ�񸴻���������Ǹ�
		    console.log("tp3��"+tpp);
          if (y > ItemBg.sy+ 2 / 3 *rpx && y < ItemBg.sy+  2 / 3 *rpx + t * rpx && x > ItemBg.sx && x < ItemBg.sx + 4 * rpx) {
                afterRecoverShow = false;
                console.log("afterRecoverShow��"+afterRecoverShow);
                clearArray(confirmArray);
                clearArray(itemArray);//��շ�����������Ǹ���
                reconverAction(rolesArray[rolesIndex]);//ִ�и����=====rolesArray[rolesIndex]
                console.log("afterRecoverShow����"+afterRecoverShow);
		}
       }
	}else
    if (skillShow) { //������ʾ
        if (MouseOnObj(x, y, CloseImg)) {
            skillShow = false;
            menuShow = true;
            clearArray(skillArray);
        } else if (MouseOnObj(x, y, skillBg)) {
            var t = rolesArray[rolesIndex].skills.length;
            tp = (ty - skillBg.sy) / rpx;
            if (y > skillBg.sy && y < skillBg.sy + t * rpx && x > skillBg.sx && x < skillBg.sx + 13 * rpx) {
                skillShow = false;
                showSkillConfirm();
            }
        }
    }else
    if (powerShow) { //������ʾ
        if (MouseOnObj(x, y, CloseImg)) { //�������ڹرհ�ť
            powerShow = false;
            menuShow = true;
            clearArray(powerArray); //���powerArray
        } else if (MouseOnObj(x, y, powerBg)) { //�������ڼ��ܵ�ͼƬ��
            var t = rolesArray[rolesIndex].powers.length; //t==powers�������ĳ���
            tp = (ty - powerBg.sy) / rpx; //tp=0
            if (y > powerBg.sy && y < powerBg.sy + t * rpx && x > powerBg.sx && x < powerBg.sx + 13 * rpx) { //�������ڷ�Χ��
                powerShow = false;
                showPowerConfirm(); //��infoShow�ж���
            }
        }
    }else
    if(itemShow) { //������ʾ�����������ĵ�·��ʱ�򣬵���showItemConfirm
       if(MouseOnObj(x, y, CloseImg)) {
            itemShow = false;
            menuShow = true;
            clearArray(itemArray);
        }else if (MouseOnObj(x, y, ItemBg)) {
            var t = rolesArray[rolesIndex].items.length;
            tp = (ty - ItemBg.sy) / rpx;//�жϵ����ĸ�������
            if (y > ItemBg.sy && y < ItemBg.sy + t * rpx && x > ItemBg.sx && x < ItemBg.sx + 4 * rpx) {
                itemShow = false;
                showItemConfirm();
            }
        }
     } else // if (itemShow)����
	 //--------------------------------------------������----------------------------------------------------------------------
	 if (spiritShow) {
        if (MouseOnObj(x, y, CloseImg)) {
            spiritShow = false;
            menuShow = true;
            clearArray(spiritArray);
        } else if (MouseOnObj(x, y, spiritBg)) {
            var t = rolesArray[rolesIndex].spirits.length;
            tp = (ty - spiritBg.sy) / rpx;//�жϵ����ĸ���������
			console.log("����"+tp+"����������");
            if (y > spiritBg.sy && y < spiritBg.sy + t * rpx && x > spiritBg.sx && x < spiritBg.sx + 4 * rpx) {
                spiritShow = false;
                showSpiritConfirm();
            }
        }
    }else 
    if (dialogShowFlag) { //�Ի��¼���ʾ
			var tf = false;
			countInterval++;
			if (countInterval == dialogString.length) {
				countInterval = 0;
				dialogShowFlag = false;
				clearArray(dialogArray);
				//drawAll();
			
				if(!openBigMap){
					if(count!=1){
					  roundShow();
				    }
				}// setTimeout(function(){canvas.addEventListener('click', cCheck, false);},1000);
				else{
					canvas.removeEventListener('click', cCheck, false);
					clearArray(shadowShow);
					ourTurn.pause();
					bigMapAudio.currentTime=3;
					bigMapAudio.play();
					shumei=true;
				    setTimeout("big_map(0)",500);
					setTimeout(function(){canvas.addEventListener('click', cCheck, false);},1500); }//canvas.addEventListener('click', cCheck, false);
			} else {
				dialogText.name = dialogString[countInterval][0] + ": " + dialogString[countInterval][1];
				for (var i = 0; i < rolesArray.length; i++) {
					if (rolesArray[i].name == dialogString[countInterval][0]) {
						dialogRoleImage.src = rolesArray[i].halfBody; 
						tf = true;
					}
				}
				for (var j = 0; j < enemysArray.length; j++) {
					if (enemysArray[j].name == dialogString[countInterval][0]) {
						dialogRoleImage.src = enemysArray[j].halfBody;
						tf = true;
					}
				}
				if (tf) {
					dialogArray.push(dialogRole);
					//drawAll();
				}
			   //drawAll();
			}
    }else
    if (VCS) { //ʤ�������ر��¼�
        if (MouseOnObj(x, y, CloseImg)) {
            clearShow();
            VCS = false;
        }
    }else 
    if(menu2Show) { //���˵�����¼�
        //����˵���һ�ʤ����������
        if (MouseOnObj(x, y, menu2C[0])) {
            VCS = true;
            victoryConditionShow();
            menuShow = false;
        }
		//����˵��ڶ���ҷ�״̬����
		else if (MouseOnObj(x, y, menu2C[1])) {
		 clearArray(confirmArray);
		 rolesStatusShow = true;
		 tmpIndex = 0;
         showRolesDetailStatus(rolesArray[0]);
         skillStatus(rolesArray[0]);
		}
		//����˵�������з�״̬����
		else if (MouseOnObj(x, y, menu2C[2])) {
		clearArray(confirmArray);
		 enemysStatusShow=true;
		 showEnemysDetailStatus(enemysArray[0]);
		}
        //����˵�������غϽ�������
        else if (MouseOnObj(x, y, menu2C[3])) {
            clearArray(everything3);
            clearArray(confirmArray); 
            for (var i = 0; i < rolesArray.length; i++) {rolesArray[i].dy = 240;}
            menu2Show = false;
			if (judeEnd()) {
			recoverSpirit();//�ָ����־������Ŀ��غ����߿���
			ourTurn.pause();
			end = true;
            ai = true;
			enemyTurn.currentTime = 0;
			enemyTurn.play();
            enemyRoundShow();		
            setTimeout(function() {
                enemysAction();
            },
            2000);}
 /*           end = true;
            ai = true;
            enemyRoundShow();
		
            setTimeout(function() {
                enemysAction();
            },
            2000);*/
        }//���ϵͳ����
		else if(systemSet){
		      if(MouseOnObj(x, y, menu3C[0])){alert("�浵�ɹ�");saveData();}
			  else if(MouseOnObj(x, y, menu3C[1])){console.log("����");}
			  else if(MouseOnObj(x, y, menu3C[2])){
				  ourTurn.pause();
				  clearArray(confirmArray);
				  clearArray(everything3);
                  menu2Show = false;
				  showStart=true;
				  systemSet=false;
				  clearArray(dialogArray);
				  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
				  Index_page();
			  }
		}
		else {
            clearArray(everything3);
            menu2Show = false;
        }
       // drawAll();
    } else
    if (menuShow) { //����˵�����¼���menuShowȫ�ֱ�������ʼ��Ϊfalse
		    clearArray(confirmArray);
			//����˵���7�ȡ���ƶ���
			if (MouseOnObj(x, y, menuC[6])) {	
				clearArray(everything3);
				clearArray(rangeShow);
				rolesArray[rolesIndex].mapX = xBeforeMove;
				rolesArray[rolesIndex].mapY = yBeforeMove;
				//-------------�������ߺ�-------------------
				if(rolesArray[rolesIndex].has_walk==1){}else
				if(rolesArray[rolesIndex].walk==1){
					rolesArray[rolesIndex].walk=0;
						console.log("�ָ����߿���");
				}
				//-----------��������п��غ�Ȼ��ʹ�������У�Ȼ����ȡ���ƶ�--------
				if(rolesArray[rolesIndex].has_use_ShenXing==0){
				    if(rolesArray[rolesIndex].not_sure_use_ShenXing==1)
						{rolesArray[rolesIndex].not_sure_use_ShenXing=0;}
					}
				menuShow = false;
			} 
			//����˵���1���ͨ������
			if (MouseOnObj(x, y, menuC[0]) && judgeEnemyOnRange(rolesArray[rolesIndex])) {
				clearArray(everything3);
				att = true;
				menuShow = false;
			    doUseSX();//�����к���ͨ����
			    //���߻ָ�
			    recover_walk();
			}
			//�ؼ�����
			if (MouseOnObj(x, y, menuC[1]) && judgeEnemyOnRange(rolesArray[rolesIndex])) {
				skillShow = true;
				menuShow = false;
				showSkill(rolesArray[rolesIndex]); //infoShow.js		
			}
			//ŭ����
			if (MouseOnObj(x, y, menuC[2]) && judgeEnemyOnRange(rolesArray[rolesIndex])) {
				powerShow = true;
				menuShow = false;
				showPower(rolesArray[rolesIndex]); //infoShow.js	
			}
			//�������
			if (MouseOnObj(x, y, menuC[3])) {
				itemShow = true;
				menuShow = false;
				showItem(rolesArray[rolesIndex]);
				//clearArray(everything3);
				//clearArray(rangeShow);
				//clearArray(menuArray);//infoShow.js			
			}
			//���������
			if (MouseOnObj(x, y, menuC[4])) {
				spiritShow = true;
				menuShow = false;
				showSpirit(rolesArray[rolesIndex]); //infoShow.js	
			}
			//����˵���6�����״̬��
			if (MouseOnObj(x, y, menuC[5])) {
				rolesStatusShow = true;
				menuShow = false;
				tmpIndex = rolesIndex;
				showRolesDetailStatus(rolesArray[rolesIndex]);
				//skillStatus(rolesArray[rolesIndex]);	
			}
			
			//����˵���8�������
			if (MouseOnObj(x, y, menuC[7])) {
				clearArray(everything3);
				clearArray(rangeShow);
				rolesArray[rolesIndex].dy = 240;
				menuShow = false;
				doUseSX();//�����к�������
				if (judeEnd()) {
					recoverSpirit();//�ָ����־������Ŀ��غ����߿���
					ourTurn.pause();
					end = true;
					ai = true;
					enemyTurn.currentTime = 0;
					enemyTurn.play();
					enemyRoundShow();
					setTimeout(function() {
						enemysAction();
					},
					2000);
				}else{end=false;}
			}
		
       // drawAll();
    } else 
    if (!end) { //�غ��Ƿ������endΪȫ�ֱ�������ʼ��Ϊfalse
		//drawAll();
        if (MouseOnRoles(x, y)) { //��������Ʈ���ҷ���ɫͼƬ��		
              if (firstClick) { //�����һ�ε��,firstClickΪȫ�ֱ�������ʼ��Ϊtrue
				  console.log("firstClick:"+firstClick);
                  findRolesIndex(x, y); //�ҳ������������ɫ��rolesIndex,rolesIndexΪȫ�ֱ���������������г�ʼ��
					if ((rolesArray[rolesIndex].dy != 240)) {
						xBeforeMove = rolesArray[rolesIndex].mapX; //�����ɫ�ƶ�ǰ��X����
						yBeforeMove = rolesArray[rolesIndex].mapY; //�����ɫ�ƶ�ǰ��Y����
						if(rolesArray[rolesIndex].has_walk==0) {
							console.log("rolesArray[rolesIndex].has_walk:  "+rolesArray[rolesIndex].has_walk);
							movingrange(); 
						    firstClick = false;
						}else
						if(rolesArray[rolesIndex].has_walk==1){
							console.log("rolesArray[rolesIndex].has_walk:  "+rolesArray[rolesIndex].has_walk);
							showMenu(rolesArray[rolesIndex]);}
					}
              } 
			  else { //������ǵ�һ�ε��
				  console.log(" not  firstClick    "+firstClick);
                    if (MouseClickOnRolesIndex(x, y)) { //���������ѡ�еĽ�ɫ��			
						clearArray(everything1); //������everything1���
						find=[[rolesArray[rolesIndex].mapX/rpx,rolesArray[rolesIndex].mapY/rpx]];
						change(find); 
						firstClick = true;
                   }	
            }
        } 
		else if (MouseOnEnemys(x, y)) {
            enemysStatusShow = true;
            clearArray(info);
            showEnemysDetailStatus(enemysArray[enemysIndex]);
        }
		else {
			//�ж�����Ƿ��һ�ε���������Ƿ��ڿ��ƶ���Χ�������Ƿ��ڵ���ͼƬ��//������û��Ʈ������ͼƬ�� 
            var s=Math.floor((x-mapMovX) / rpx)+","+Math.floor((y-mapMovY) / rpx);
            if (!firstClick && MouseOnMovement(x,y) && !MouseOnEnemys(x, y)&& !IsPass(s)&&rolesArray[rolesIndex].has_walk==0) { //judge.js
                setPos(x-mapMovX,y-mapMovY);
				//֮������ѡ�����а�ť��ʱ�򣬴�spiritShenXing��Ϊ�˰��Ѿ������������Ϣ���߱�����
				if (find.length>0&&find.length<=rolesArray[rolesIndex].movement){
					firstClick = true;
					if(rolesArray[rolesIndex].spiritShenXing==1){rolesArray[rolesIndex].not_sure_use_ShenXing=1;console.log("�Ѿ�ʹ������");}
					clearArray(everything1);
					end=true;
					change(find);			
				}

				closelist=[],openlist=[];											
				num=undefined;
            }else
			if(!firstClick && !MouseOnMovement(x,y))// && !(MouseOnObj(x, y, menu2)) && !(MouseOnObj(x, y, menu))
			{				
					    clearArray(everything1); //������everything1���;l[[]]
						firstClick = true;				
			}
			else
            //������ڿյ���
            if (firstClick && !MouseOnEnemys(x, y)&&hasNoRolesWalk ) { //judge.js,����ǵ�һ�ε���������û��Ʈ�ڵ�����
                if (!menu2Show) { //���˵�Ϊȫ�ֱ�������ʼ��Ϊfalse
                    if (x > canvasWidth / 2) { //��������ڻ���һ����ұ�ʱ
                        menu2.sx = 0; //�ı����˵���X����
                    } else { //��������ڻ���һ������ʱ
                        menu2.sx = canvasWidth - menu.swidth; //1248-4*48
                    }
                    everything3.push(menu2); //�Ѹ��ĺ��menu2�ŵ�everything1������,push����Ԫ����ӵ�һ�������У�������������³���ֵ��   
                    for (var i = 0; i < 5; i++) {
                        menu2C[i].sx = menu2.sx;
                        everything3.push(menu2C[i]);
                    }
                }
                menu2Show = true;
            }
        }
    }
} //cCheck(e)����
