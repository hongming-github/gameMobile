/*
	����ƶ�����������ƶ�ʱ����(OK)
*/
var mapMovX=0;//��¼��ͼˮƽ��λ����
var mapMovY=0;//��¼��ͼ��ֵ�����λ����
var mapLeftMov=false;//��ͼ�����ƶ��Ŀ���
var mapRightMov=false;//��ͼ�����ƶ��Ŀ���
var mapUpMov=false;//��ͼ�����ƶ��Ŀ���
var mapDownMov=false;//��ͼ�����ƶ��Ŀ���
function mMove(e) {
	
	var mx = e.pageX - canvas.offsetLeft; //����ڻ�����x����
    var my = e.pageY - canvas.offsetTop; //����ڻ�����y����
	if (showStart) {//��ʼҳ�������ƶ��Ķ�̫Ч��
			if (MouseOnObj(mx, my, startButton1)) {
				clearArr(startShow);
				var startBg = new picture(0,0,0, 0, 960, 576, startImage);
				startShow.push(startBg);
				startButton1 = new picture(startBg.sx + 450+8,startBg.sy + 180-8,startBg.sx + 450+8, startBg.sy + 180-8, 310, 70, xdlc);
				startShow.push(startButton1);
				startButton2 = new picture(startBg.sx + 450,startBg.sy + 250,startBg.sx + 450, startBg.sy + 250, 310, 70, jdhy);
				startShow.push(startButton2);
				startButton3 = new picture(startBg.sx + 450, startBg.sy + 320,startBg.sx + 450, startBg.sy + 320, 310, 70, tyjh);
				startShow.push(startButton3);
				drawArr(startShow);
			} else 
			if (MouseOnObj(mx, my, startButton2)) {
				clearArr(startShow);
			   var startBg = new picture(0,0,0, 0, 960, 576, startImage);
				startShow.push(startBg);
				startButton1 = new picture(startBg.sx + 450,startBg.sy + 180,startBg.sx + 450, startBg.sy + 180, 310, 70, xdlc);
				startShow.push(startButton1);
				startButton2 = new picture(startBg.sx + 450+8,startBg.sy + 250-8,startBg.sx + 450+8, startBg.sy + 250-8, 310, 70, jdhy);
				startShow.push(startButton2);
				startButton3 = new picture(startBg.sx + 450,startBg.sy + 320,startBg.sx + 450, startBg.sy + 320, 310, 70, tyjh);
				startShow.push(startButton3);
				drawArr(startShow);
			} else 
			if (MouseOnObj(mx, my, startButton3)) {
				clearArr(startShow);
				var startBg = new picture(0,0,0, 0, 960, 576, startImage);
				startShow.push(startBg);
				startButton1 = new picture(startBg.sx + 450,startBg.sy + 180,startBg.sx + 450, startBg.sy + 180, 310, 70, xdlc);
				startShow.push(startButton1);
				startButton2 = new picture(startBg.sx + 450,startBg.sy + 250,startBg.sx + 450, startBg.sy + 250, 310, 70, jdhy);
				startShow.push(startButton2);
				startButton3 = new picture(startBg.sx + 450+8, startBg.sy + 320-8,startBg.sx + 450+8, startBg.sy + 320-8, 310, 70, tyjh);
				startShow.push(startButton3);
				drawArr(startShow);
			} else {
				clearArr(startShow);
				Index_page();
			}
	}else/* if(!end){
        if(0<mx&&mx<24){console.log("��������");mapLeftMov=true;mapRightMov=false; mapUpMov=false;mapDownMov=false;}
		else if(936<mx&&mx<960){console.log("������ұ�");mapRightMov=true;leftMov=false;mapUpMov=false; mapDownMov=false;}
		else if(0<my&&my<24){console.log("������ϱ�");mapRightMov=false;leftMov=false;mapUpMov=true; mapDownMov=false;}
		else if(544<my&&my<568){console.log("������±�");mapRightMov=false;leftMov=false;mapUpMov=false; mapDownMov=true;}
		else {infoShow(mx, my);mapRightMov=false;mapLeftMov=false;mapUpMov=false; mapDownMov=false;clearInterval(mapDraw);}
	}*/
	
	if(gameover){//��Ϸ����
		console.log("��Ϸ����");
	}else
	if(cangKuShow){//��ʾ�ֿ�
		console.log("��ʾ�ֿ�");
		if(tempp==00){cangKuMove(mx,my,storehouse.additems,tempp);}
		if(tempp==10){cangKuMove(mx,my,storehouse.addskills,tempp);}
		if(tempp==20){cangKuMove(mx,my,storehouse.addequips,tempp);}
		if(tempp==30){cangKuMove(mx,my,storehouse.addpowers,tempp);}	
	}else
	if(nextloading){//������һ��
		console.log("������һ�ص���Դ");
	}else
	if(itemStore){//�����̵�Ŀ���
		console.log("�����̵�Ŀ���");
	   itemStoreMove(mx,my,storehouse.additems,store.items);
	}else
	if(equipStore){//�����̵�
		console.log("�����̵�");
		equipStoreMove(mx,my,storehouse.addequips,store.equips);
	}else
	if(ZBZhengLi){//װ������
		console.log("װ��");
       equipMove(mx,my,rolesArray[big_role_index].equips,storehouse.addequips);
	}else
	if(DuiYuan){//��Ա
      console.log("��Ա");
	}else  
	if(sureToFX){//ȷ����ӡ��
		console.log("ȷ����ӡ��");
	}else   
	if(itemNumChange){//�����ı���ߵ������Ŀ�
	   if(isdown){//�����갴����
		   var movex=mx-mdownx;
		   if((huaKuai.sx==274&&movex>0)||(huaKuai.sx==454&&movex<0)||(huaKuai.sx>274&&huaKuai.sx<454) && itemOption!=12){//�������������ڻ�׼�ߵķ�Χ�ڣ���274,454��  
			   //���»��������
			   huaKuai.sx=huaKuai.mapX+movex;
			   if(huaKuai.sx>454){huaKuai.sx=454;}
			   else if(huaKuai.sx<274){huaKuai.sx=274;}
			   //���ݻ����������������
			   var index;//������λ���ĸ����ߵ�����
			   if(itemOption==0||itemOption==1){
				   if(dingzhukuangLeft[0]==1){index=0;}
				   else if(dingzhukuangLeft[1]==1){index=1;}
				   else if(dingzhukuangLeft[2]==1){index=2;}
				   else if(dingzhukuangLeft[3]==1){index=3;}
				   else if(dingzhukuangLeft[4]==1){index=4;}
				   dragNum= Math.ceil(((huaKuai.sx-274)/180)*rolesArray[big_role_index].items[index].num);
			   }else if(itemOption==8){//�����̵�
			       if(dingzhukuangLeft[0]==1){index=0;}
				   else if(dingzhukuangLeft[1]==1){index=1;}
				   else if(dingzhukuangLeft[2]==1){index=2;}
				   else if(dingzhukuangLeft[3]==1){index=3;}
				   else if(dingzhukuangLeft[4]==1){index=4;}
				   dragNum= Math.ceil(((huaKuai.sx-274)/180)*storehouse.additems[index].num);
			   }else if(itemOption==2||itemOption==3||itemOption==9||itemOption==11){
				   if(dingzhukuangRight[0]==1){index=0;}
				   else if(dingzhukuangRight[1]==1){index=1;}
				   else if(dingzhukuangRight[2]==1){index=2;}
				   else if(dingzhukuangRight[3]==1){index=3;}
				   else if(dingzhukuangRight[4]==1){index=4;}
				   else if(dingzhukuangRight[5]==1){index=5;}
				   if(itemOption==9){//�������
					   //�û�ѡ��ĵ��ߵ�����
					   dragNum= Math.ceil(((huaKuai.sx-274)/180)*store.items[index].num);
					   //�������
					   if(dragNum*returnItemPrice(store.items[index].id)>teamMoney){
						  dragNum=Math.floor(teamMoney/returnItemPrice(store.items[index].id));
					   }
				   }else if(itemOption==11){//��������
				        //�û�ѡ��ĵ��ߵ�����
					   dragNum= Math.ceil(((huaKuai.sx-274)/180)*store.equips[index].num);
					   //�������
					   if(dragNum*returnEquipPrice(store.equips[index].id)>teamMoney){
						  dragNum=Math.floor(teamMoney/returnEquipPrice(store.equips[index].id));
					   }
				   }
					else{dragNum= Math.ceil(((huaKuai.sx-274)/180)*storehouse.additems[index].num);}
			   }    
			   selsectNum.name="��ѡ����  "+dragNum+"  �ݸõ���";		
		   }
			if((huaKuai.sx==394&&movex>0)||(huaKuai.sx==574&&movex<0)||(huaKuai.sx>394&&huaKuai.sx<574)&&itemOption==12){//�����ֿ��еĻ����������������ڻ�׼�ߵķ�Χ�ڣ���394,574��  
			   //���»��������
			   huaKuai.sx=huaKuai.mapX+movex;
			   if(huaKuai.sx>574){huaKuai.sx=574;}
			   else if(huaKuai.sx<394){huaKuai.sx=394;}
			   //���ݻ����������������
			   var index;//������λ���ĸ����ߵ�����
			   if(dingzhukuangRight[0]==1){index=0;}
				   else if(dingzhukuangRight[1]==1){index=1;}
				   else if(dingzhukuangRight[2]==1){index=2;}
				   else if(dingzhukuangRight[3]==1){index=3;}
				   else if(dingzhukuangRight[4]==1){index=4;}
				   else if(dingzhukuangRight[5]==1){index=5;} 
				   if(tempp==00){
					   dragNum= Math.ceil(((huaKuai.sx-394)/180)*storehouse.additems[index].num);
				   }
		           else if(tempp==10||tempp==30){
					   dragNum=1;
				   }
				   else if(tempp==20){				   
					   dragNum= Math.ceil(((huaKuai.sx-394)/180)*storehouse.addequips[index].num);
				   }
			   }			  
			   selsectNum.name="��ѡ����  "+dragNum+"  �ݸõ���"; 
		       drawBigMap();
	       } 
	   else{ 
		   huaKuai.mapX=huaKuai.sx;
		   }//����ɿ���ʱ����»����mapX.
	}else
	if(NJZhengLi){//ŭ������
	  powerMove(mx,my,rolesArray[big_role_index].powers,storehouse.addpowers);
	}else
	if(MJZhengLi){//�ؼ�����
	  skillMove(mx,my,rolesArray[big_role_index].skills,storehouse.addskills);
	}else
	if(DJZhengLi){//��������
	   itemMove(mx,my,rolesArray[big_role_index].items,storehouse.additems);
	}else
	if(bigMapoption){	
	}else
	if (showStart) {//��ʼҳ�������ƶ��Ķ�̫Ч��
			if (MouseOnObj(mx, my, startButton1)) {
				clearArr(startShow);
				var startBg = new picture(0,0,0, 0, 960, 576, startImage);
				startShow.push(startBg);
				startButton1 = new picture(startBg.sx + 450+8,startBg.sy + 180-8,startBg.sx + 450+8, startBg.sy + 180-8, 310, 70, xdlc);
				startShow.push(startButton1);
				startButton2 = new picture(startBg.sx + 450,startBg.sy + 250,startBg.sx + 450, startBg.sy + 250, 310, 70, jdhy);
				startShow.push(startButton2);
				startButton3 = new picture(startBg.sx + 450, startBg.sy + 320,startBg.sx + 450, startBg.sy + 320, 310, 70, tyjh);
				startShow.push(startButton3);
				drawArr(startShow);
			} else 
			if (MouseOnObj(mx, my, startButton2)) {
				clearArr(startShow);
			   var startBg = new picture(0,0,0, 0, 960, 576, startImage);
				startShow.push(startBg);
				startButton1 = new picture(startBg.sx + 450,startBg.sy + 180,startBg.sx + 450, startBg.sy + 180, 310, 70, xdlc);
				startShow.push(startButton1);
				startButton2 = new picture(startBg.sx + 450+8,startBg.sy + 250-8,startBg.sx + 450+8, startBg.sy + 250-8, 310, 70, jdhy);
				startShow.push(startButton2);
				startButton3 = new picture(startBg.sx + 450,startBg.sy + 320,startBg.sx + 450, startBg.sy + 320, 310, 70, tyjh);
				startShow.push(startButton3);
				drawArr(startShow);
			} else 
			if (MouseOnObj(mx, my, startButton3)) {
				clearArr(startShow);
				var startBg = new picture(0,0,0, 0, 960, 576, startImage);
				startShow.push(startBg);
				startButton1 = new picture(startBg.sx + 450,startBg.sy + 180,startBg.sx + 450, startBg.sy + 180, 310, 70, xdlc);
				startShow.push(startButton1);
				startButton2 = new picture(startBg.sx + 450,startBg.sy + 250,startBg.sx + 450, startBg.sy + 250, 310, 70, jdhy);
				startShow.push(startButton2);
				startButton3 = new picture(startBg.sx + 450+8, startBg.sy + 320-8,startBg.sx + 450+8, startBg.sy + 320-8, 310, 70, tyjh);
				startShow.push(startButton3);
				drawArr(startShow);
			} else {
				clearArr(startShow);
				Index_page();
			}
	}else 
	if(gameBackGroundShow){
	}else
	if (att || skillAtt || powerAtt) { //�����ͨ�������ؼ�������ŭ����
		everything2.pop();
		infoShow(mx, my);
/*		if (MouseOnRange(mx, my)) { 	
			if (MouseOnEnemys(mx, my)) {
				 putRec(mx,my);               
			}
		}*/
	} else
	if (itemShow) { //������ʾ��������ƶ���ʱ�������ɫ�Ŀ������߶�
		console.log("hhhhhhh");
		confirmArray.pop();
		if (MouseOnObj(mx, my, ItemBg)) {
			var t = rolesArray[rolesIndex].items.length;
				if (my > ItemBg.sy && my < ItemBg.sy + t * rpx && mx > ItemBg.sx && mx < ItemBg.sx + 4 * rpx) {
					mrec.sx = ItemBg.sx;
					mrec.sy = (Math.floor(my / rpx)) * rpx;
					mrec.swidth = 4 * rpx;
					confirmArray.push(mrec);
				}
			}
//			drawAll();
	}else
	if (spiritShow) { //��������ʾ	
		 confirmArray.pop();
		 if (MouseOnObj(mx, my, spiritBg)) {
			var t = rolesArray[rolesIndex].spirits.length;
				if (my > spiritBg.sy && my < spiritBg.sy + t * rpx && mx > spiritBg.sx && mx < spiritBg.sx + 4 * rpx) {
					mrec.sx = spiritBg.sx+2;
					mrec.sy = (Math.floor(my / rpx)) * rpx+3;
					mrec.swidth = 4 * rpx;
					confirmArray.push(mrec);
					}
				}
	//	  drawAll();
	}else
	if(IntoGuanKa){
	}else
	if (enemysStatusShow) {//�������״̬��ʾ
	} else 
	if (rolesStatusShow){//����״̬����ʾ	
	}else
	if(powerShow){
		 confirmArray.pop();
		if(MouseOnObj(mx, my, powerBg)) {
		   var t = rolesArray[rolesIndex].powers.length;
		   if (my > powerBg.sy && my < powerBg.sy + t * rpx && mx > powerBg.sx && mx < powerBg.sx + 13 * rpx) {
				mrec.sx = powerBg.sx;
				mrec.sy = (Math.floor(my / rpx)) * rpx;
				mrec.swidth = 13 * rpx;
				confirmArray.push(mrec);
			}
		}
	//	drawAll();
	}else
	if(skillShow){
		 confirmArray.pop();
		if(MouseOnObj(mx, my, skillBg)) {
		   var t = rolesArray[rolesIndex].skills.length;
		   if (my > skillBg.sy && my < skillBg.sy + t * rpx && mx > skillBg.sx && mx < skillBg.sx + 13 * rpx) {
				mrec.sx = skillBg.sx;
				mrec.sy = (Math.floor(my / rpx)) * rpx;
				mrec.swidth = 13 * rpx;
				confirmArray.push(mrec);
			}
		}
	//	drawAll();
	}else
	if(spiritConfirmShow){//ȷ��������
	   clearArray(everything2);
	}else
	if(skillConfirmShow){
	   clearArray(everything2);
	}else
	if(powerConfirmShow){
		clearArray(everything2);
	}else
	if(levelUpOk){//�����Ŀ���	
		console.log("�����Ŀ���");
	   if(info.length>0){clearArray(info);}
	   clearArray(everything2);
	}else
	if (itemConfirmShow){//ȷ��ʹ�õ��ߵĿ���
		
	}else 
	if(afterRecoverShow){
		//--------��������ƶ��ĸ���-----
		if (MouseOnObj(mx, my, ItemBg)) {
			var t = deadArray.length;
			if (my > ItemBg.sy+ 1 * rpx && my < ItemBg.sy + t * rpx + 1 * rpx && mx > ItemBg.sx && mx < ItemBg.sx + 4 * rpx)
			{
				mrec.sx = ItemBg.sx;
			mrec.sy = (Math.floor(my / rpx)) * rpx;
			mrec.swidth = 4 * rpx;
			//mrec.sheight=rpx;
			confirmArray.push(mrec);
			}
		}else{clearArray(confirmArray);}
//		drawAll(); 
	}else
	if (menu2Show) {//���˵���ʾ
		clearArray(confirmArray);
		 clearArray(everything2);
		//����ڲ˵���
		if (MouseOnObj(mx, my, menu2)) {
			mrec.sx = menu2.sx;
			mrec.sy = (Math.floor(my / rpx)) * rpx;
			mrec.swidth = 4 * rpx;
			confirmArray.push(mrec);
			//�������ƶ���ϵͳ��������
			if (MouseOnObj(mx, my, menu2C[4])) {
				systemSet=true;
				if (mx > canvasWidth / 2) { menu3.sx =canvasWidth-8*rpx ; } 
				else {menu3.sx=  rpx * 4;}
				clearArray(dialogArray);
				dialogArray.push(menu3);
				for (var i = 0; i < 3; i++) {
					menu3C[i].sx= menu3.sx;
					dialogArray.push(menu3C[i]);
				}
			}else{systemSet=false;clearArray(dialogArray);}
		}else{
			//��������ϵͳ�����ı�����
			if(MouseOnObj(mx,my, menu3)){//�����ɫ�Ŀ��
				if(systemSet){
				   mrec.sx= menu3.sx;
				   mrec.sy= (Math.floor(my / rpx)) * rpx;
				   mrec.swidth = 4 * rpx;
				   confirmArray.push(mrec);
				}else{clearArray(dialogArray);}
			}
			else{systemSet=false;clearArray(dialogArray);}
		}
	//	drawAll();
	}else
	if (menuShow) {//����˵���ʾ									
		clearArray(confirmArray);
		clearArray(info);
		//����ڲ˵���
		if (MouseOnObj(mx, my, menu)) {
			mrec.sx = menu.sx;
			mrec.sy = (Math.floor(my / rpx)) * rpx;
			mrec.swidth = 4 * rpx;
			mrec.sheight=rpx;
			confirmArray.push(mrec);
		}
//		drawAll(); 
	}else{	//����ƶ�����Χ��ʱ�򣬴�ͼƬ�����Ŀ���
		if(!levelUpOk){
		clearArray(everything2);
		if(dialogShowFlag||IntoGuanKa){if(info.length!=0){ clearArray(info);}}	
/*		else if(0<mx&&mx<24){clearInterval(mapDraw);mapLeftMov=true;mapRightMov=false; mapUpMov=false;mapDownMov=false;mapDraw=setInterval(drawAll,10);}
		else if(936<mx&&mx<960){clearInterval(mapDraw);mapRightMov=true;leftMov=false;mapUpMov=false; mapDownMov=false;mapDraw=setInterval(drawAll,10);}
		else if(0<my&&my<24){clearInterval(mapDraw);mapRightMov=false;leftMov=false;mapUpMov=true; mapDownMov=false;mapDraw=setInterval(drawAll,10);}
		else if(544<my&&my<568){clearInterval(mapDraw);mapRightMov=false;leftMov=false;mapUpMov=false; mapDownMov=true;mapDraw=setInterval(drawAll,10);}*/
		else if(0<mx&&mx<24){console.log("��������");mapLeftMov=true;mapRightMov=false; mapUpMov=false;mapDownMov=false;}
		else if(936<mx&&mx<960){console.log("������ұ�");mapRightMov=true;leftMov=false;mapUpMov=false; mapDownMov=false;}
		else if(0<my&&my<24){console.log("������ϱ�");mapRightMov=false;leftMov=false;mapUpMov=true; mapDownMov=false;}
		else if(544<my&&my<568){console.log("������±�");mapRightMov=false;leftMov=false;mapUpMov=false; mapDownMov=true;}
		else {infoShow(mx, my);mapRightMov=false;mapLeftMov=false;mapUpMov=false; mapDownMov=false;clearInterval(mapDraw);}
		}
	}
	
}