import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // В майбутньому тут буде запис у Firebase та відправка в Telegram
    console.log('--- NEW ORDER RECEIVED ---');
    console.log('Customer:', body.name);
    console.log('Phone:', body.phone);
    console.log('City:', body.city);
    console.log('Branch:', body.branch);
    console.log('Product:', body.product);
    console.log('Price:', body.price);
    console.log('Payment:', body.paymentType);
    console.log('---------------------------');

    // Симулюємо успішну обробку
    return NextResponse.json({ 
      success: true, 
      message: 'Order received successfully',
      orderId: Math.random().toString(36).substr(2, 9).toUpperCase()
    });

  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to process order' 
    }, { status: 500 });
  }
}
